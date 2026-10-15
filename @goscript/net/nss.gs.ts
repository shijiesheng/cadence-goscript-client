// Generated file based on nss.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as bytealg from "@goscript/internal/bytealg/index.js"

import * as os from "@goscript/os/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as fs from "@goscript/io/fs/index.js"

import * as __goscript_parse from "./parse.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/internal/bytealg/index.js"
import "@goscript/os/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/io/fs/index.js"
import "./parse.gs.ts"

export class nsswitchConfig {
	public get initOnce(): sync.Once {
		return this._fields.initOnce
	}

	public set initOnce(value: sync.Once) {
		this._fields.initOnce = value
	}

	// ch is used as a semaphore that only allows one lookup at a
	// time to recheck nsswitch.conf
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

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get nssConf(): nssConf | $.VarRef<nssConf> | null {
		return this._fields.nssConf
	}

	public set nssConf(value: nssConf | $.VarRef<nssConf> | null) {
		this._fields.nssConf = value
	}

	public _fields: {
		initOnce: sync.Once
		ch: $.Channel<{}> | null
		lastChecked: time.Time
		mu: sync.Mutex
		nssConf: nssConf | $.VarRef<nssConf> | null
	}

	constructor(init?: Partial<{initOnce?: sync.Once, ch?: $.Channel<{}> | null, lastChecked?: time.Time, mu?: sync.Mutex, nssConf?: nssConf | $.VarRef<nssConf> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			initOnce: init?.initOnce ? $.markAsStructValue($.cloneStructValue(init.initOnce)) : $.markAsStructValue(new sync.Once()),
			ch: init?.ch ?? (null! as $.Channel<{}> | null),
			lastChecked: init?.lastChecked ? $.markAsStructValue($.cloneStructValue(init.lastChecked)) : $.markAsStructValue(new time.Time()),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			nssConf: init?.nssConf ?? (null! as nssConf | $.VarRef<nssConf> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nsswitchConfig {
		return new nsswitchConfig(this, true)
	}

	public __goscriptAssign(source: nsswitchConfig): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.initOnce, values.initOnce)
		target.ch = values.ch
		$.assignStruct(target.lastChecked, values.lastChecked)
		$.assignStruct(target.mu, values.mu)
		target.nssConf = values.nssConf
	}

	public async acquireSema(): globalThis.Promise<void> {
		const conf: nsswitchConfig | $.VarRef<nsswitchConfig> | null = this;
		await $.chanSend($.pointerValue<nsswitchConfig>(conf).ch, {})
	}

	public async init(): globalThis.Promise<void> {
		let conf: nsswitchConfig | $.VarRef<nsswitchConfig> | null = this;
		const conf$: nsswitchConfig = conf == null ? $.pointerTarget<nsswitchConfig>(conf) : (conf as any).__isVarRef === true ? (conf as any).value : (conf as any).__goValue === undefined ? (conf as any) : $.pointerTarget<nsswitchConfig>(conf);
		;(conf$ as nsswitchConfig).nssConf = await parseNSSConfFile("/etc/nsswitch.conf")
		$.assignStruct((conf$ as nsswitchConfig).lastChecked, time.Now());
		;(conf$ as nsswitchConfig).ch = $.makeChannel<{}>(1, {}, "both")
	}

	public async releaseSema(): globalThis.Promise<void> {
		const conf: nsswitchConfig | $.VarRef<nsswitchConfig> | null = this;
		await $.chanRecv($.pointerValue<nsswitchConfig>(conf).ch)
	}

	public async tryAcquireSema(): globalThis.Promise<boolean> {
		const conf: nsswitchConfig | $.VarRef<nsswitchConfig> | null = this;
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, boolean>([
			{
				id: 0,
				isSend: true,
				channel: $.pointerValue<nsswitchConfig>(conf).ch,
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

	public async tryUpdate(): globalThis.Promise<void> {
		let conf: nsswitchConfig | $.VarRef<nsswitchConfig> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const conf$: nsswitchConfig = conf == null ? $.pointerTarget<nsswitchConfig>(conf) : (conf as any).__isVarRef === true ? (conf as any).value : (conf as any).__goValue === undefined ? (conf as any) : $.pointerTarget<nsswitchConfig>(conf)
		await (conf$ as nsswitchConfig).initOnce.Do($.functionValue(((__receiver) => () => __receiver.init())((conf$ as nsswitchConfig)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "net.(*nsswitchConfig).init-fm"))

		// Ensure only one update at a time checks nsswitch.conf
		if (!await (conf !== null && (conf as any).__isVarRef !== true && (conf as any).__goValue === undefined ? ((conf as any) as nsswitchConfig).tryAcquireSema() : nsswitchConfig.prototype.tryAcquireSema.call(conf))) {
			return
		}
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.releaseSema())((conf$ as nsswitchConfig)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "net.(*nsswitchConfig).releaseSema-fm")
		__defer.defer(async () => { await __goscriptDeferCallee0() })

		let now = $.markAsStructValue($.cloneStructValue(time.Now()))
		if ($.markAsStructValue($.cloneStructValue((conf$ as nsswitchConfig).lastChecked)).After($.markAsStructValue($.cloneStructValue($.markAsStructValue($.cloneStructValue(now)).Add(-5000000000n))))) {
			return
		}
		$.assignStruct((conf$ as nsswitchConfig).lastChecked, now)

		let mtime: time.Time = $.markAsStructValue(new time.Time())
		{
			let [fi, err] = await os.Stat("/etc/nsswitch.conf")
			if (err == null) {
				mtime = $.assignStruct(mtime, ((__goscriptAwait = (fi !== null && (fi as any).__isVarRef !== true && (fi as any).__goValue === undefined ? (fi as Exclude<fs.FileInfo, null>) : $.pointerValue<Exclude<fs.FileInfo, null>>(fi)).ModTime(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))
			}
		}
		if ($.markAsStructValue($.cloneStructValue(mtime)).Equal($.markAsStructValue($.cloneStructValue($.pointerValue<nssConf>((conf$ as nsswitchConfig).nssConf).mtime)))) {
			return
		}

		let __goscriptShadow0: nssConf | $.VarRef<nssConf> | null = await parseNSSConfFile("/etc/nsswitch.conf")
		await (conf$ as nsswitchConfig).mu.Lock();
		;(conf$ as nsswitchConfig).nssConf = __goscriptShadow0
		void (conf$ as nsswitchConfig).mu.Unlock()
	}

	static __typeInfo = $.registerStructType(
		"net.nsswitchConfig",
		() => new nsswitchConfig(),
		() => [$.methodSignature("acquireSema", [], [], true), $.methodSignature("init", [], [], true), $.methodSignature("releaseSema", [], [], true), $.methodSignature("tryAcquireSema", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("tryUpdate", [], [], true)],
		nsswitchConfig,
		() => [/* @__PURE__ */ $.structField("initOnce", "sync.Once", [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("ch", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [1], 16, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("lastChecked", "time.Time", [2], 24, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [3], 48, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("nssConf", /* @__PURE__ */ $.pointerType("net.nssConf"), [4], 56, false, { pkgPath: "net" })]
	)
}

export class nssConf {
	public get mtime(): time.Time {
		return this._fields.mtime
	}

	public set mtime(value: time.Time) {
		this._fields.mtime = value
	}

	public get err(): $.GoError {
		return this._fields.err
	}

	public set err(value: $.GoError) {
		this._fields.err = value
	}

	public get sources(): globalThis.Map<string, $.Slice<nssSource>> | null {
		return this._fields.sources
	}

	public set sources(value: globalThis.Map<string, $.Slice<nssSource>> | null) {
		this._fields.sources = value
	}

	public _fields: {
		mtime: time.Time
		err: $.GoError
		sources: globalThis.Map<string, $.Slice<nssSource>> | null
	}

	constructor(init?: Partial<{mtime?: time.Time, err?: $.GoError, sources?: globalThis.Map<string, $.Slice<nssSource>> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mtime: init?.mtime ? $.markAsStructValue($.cloneStructValue(init.mtime)) : $.markAsStructValue(new time.Time()),
			err: init?.err ?? (null! as $.GoError),
			sources: init?.sources ?? (null! as globalThis.Map<string, $.Slice<nssSource>> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nssConf {
		return new nssConf(this, true)
	}

	public __goscriptAssign(source: nssConf): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mtime, values.mtime)
		target.err = $.assignFieldValue(target.err, values.err, "error")
		target.sources = values.sources
	}

	static __typeInfo = $.registerStructType(
		"net.nssConf",
		() => new nssConf(),
		() => [],
		nssConf,
		() => [/* @__PURE__ */ $.structField("mtime", "time.Time", [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("err", "error", [1], 24, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("sources", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType("net.nssSource")), [2], 40, false, { pkgPath: "net" })]
	)
}

export class nssSource {
	public get source(): string {
		return this._fields.source
	}

	public set source(value: string) {
		this._fields.source = value
	}

	public get criteria(): $.Slice<nssCriterion> {
		return this._fields.criteria
	}

	public set criteria(value: $.Slice<nssCriterion>) {
		this._fields.criteria = value
	}

	public _fields: {
		source: string
		criteria: $.Slice<nssCriterion>
	}

	constructor(init?: Partial<{source?: string, criteria?: $.Slice<nssCriterion>}>, __goscriptValue?: boolean) {
		this._fields = {
			source: init?.source ?? ("" as string),
			criteria: init?.criteria ?? (null! as $.Slice<nssCriterion>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nssSource {
		return new nssSource(this, true)
	}

	public __goscriptAssign(source: nssSource): void {
		const target = this._fields
		const values = source._fields
		target.source = values.source
		target.criteria = values.criteria
	}

	public standardCriteria(): boolean {
		const s = this;
		for (let __goscriptRangeTarget0 = s.criteria, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
			let crit = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as nssCriterion)).clone()
			if (!crit.standardStatusAction(i == ($.sliceLen(s.criteria) - 1))) {
				return false
			}
		}
		return true
	}

	static __typeInfo = $.registerStructType(
		"net.nssSource",
		() => new nssSource(),
		() => [$.methodSignature("standardCriteria", [], [/* @__PURE__ */ $.basicType("bool")])],
		nssSource,
		() => [/* @__PURE__ */ $.structField("source", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("criteria", /* @__PURE__ */ $.sliceType("net.nssCriterion"), [1], 16, false, { pkgPath: "net" })]
	)
}

export class nssCriterion {
	public get negate(): boolean {
		return this._fields.negate
	}

	public set negate(value: boolean) {
		this._fields.negate = value
	}

	public get status(): string {
		return this._fields.status
	}

	public set status(value: string) {
		this._fields.status = value
	}

	public get action(): string {
		return this._fields.action
	}

	public set action(value: string) {
		this._fields.action = value
	}

	public _fields: {
		negate: boolean
		status: string
		action: string
	}

	constructor(init?: Partial<{negate?: boolean, status?: string, action?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			negate: init?.negate ?? (false as boolean),
			status: init?.status ?? ("" as string),
			action: init?.action ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nssCriterion {
		return new nssCriterion(this, true)
	}

	public __goscriptAssign(source: nssCriterion): void {
		const target = this._fields
		const values = source._fields
		target.negate = values.negate
		target.status = values.status
		target.action = values.action
	}

	public standardStatusAction(last: boolean): boolean {
		const c = this;
		if (c.negate) {
			return false
		}
		let def: string = ""
		switch (c.status) {
			case "success":
			{
				def = "return"
				break
			}
			case "notfound":
			case "unavail":
			case "tryagain":
			{
				def = "continue"
				break
			}
			default:
			{
				return false
				break
			}
		}
		if (last && ($.stringEqual(c.action, "return"))) {
			return true
		}
		return $.stringEqual(c.action, def)
	}

	static __typeInfo = $.registerStructType(
		"net.nssCriterion",
		() => new nssCriterion(),
		() => [$.methodSignature("standardStatusAction", [["last", /* @__PURE__ */ $.basicType("bool")]], [/* @__PURE__ */ $.basicType("bool")])],
		nssCriterion,
		() => [/* @__PURE__ */ $.structField("negate", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("status", /* @__PURE__ */ $.basicType("string"), [1], 8, false, { pkgPath: "net" }), /* @__PURE__ */ $.structField("action", /* @__PURE__ */ $.basicType("string"), [2], 24, false, { pkgPath: "net" })]
	)
}

export const nssConfigPath: string = "/etc/nsswitch.conf"

export let nssConfig: $.VarRef<nsswitchConfig> = $.varRef(new nsswitchConfig(undefined, true))

export function __goscript_set_nssConfig(__goscriptValue: nsswitchConfig): void {
	$.assignStruct(nssConfig.value, __goscriptValue)
}

export async function getSystemNSS(): globalThis.Promise<nssConf | $.VarRef<nssConf> | null> {
	await nssConfig.value.tryUpdate()
	await nssConfig.value.mu.Lock()
	let __goscriptShadow1: nssConf | $.VarRef<nssConf> | null = nssConfig.value.nssConf
	nssConfig.value.mu.Unlock()
	return __goscriptShadow1
}

export async function parseNSSConfFile(file: string): globalThis.Promise<nssConf | $.VarRef<nssConf> | null> {
	await using __defer = new $.AsyncDisposableStack()
	let __goscriptTuple0: any = await __goscript_parse.open(file)
	let f: __goscript_parse.file | $.VarRef<__goscript_parse.file> | null = __goscriptTuple0[0]
	let err = __goscriptTuple0[1]
	if (err != null) {
		return new nssConf({err: err})
	}
	__defer.defer(async () => { await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_parse.file).close() : __goscript_parse.file.prototype.close.call(f)) })
	let __goscriptTuple1: any = await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_parse.file).stat() : __goscript_parse.file.prototype.stat.call(f))
	let mtime = __goscriptTuple1[0]
	err = __goscriptTuple1[2]
	if (err != null) {
		return new nssConf({err: err})
	}

	let __goscriptShadow2: nssConf | $.VarRef<nssConf> | null = await parseNSSConf(f)
	$.assignStruct($.pointerValue<nssConf>(__goscriptShadow2).mtime, mtime)
	return __goscriptShadow2
}

export async function parseNSSConf(f: __goscript_parse.file | $.VarRef<__goscript_parse.file> | null): globalThis.Promise<nssConf | $.VarRef<nssConf> | null> {
	let __goscriptShadow3: nssConf | $.VarRef<nssConf> | null = new nssConf()
	for (let [line, ok] = await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_parse.file).readLine() : __goscript_parse.file.prototype.readLine.call(f)); ok; [line, ok] = await (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_parse.file).readLine() : __goscript_parse.file.prototype.readLine.call(f))) {
		line = __goscript_parse.trimSpace(__goscript_parse.removeComment(line))
		if ($.stringLen(line) == 0) {
			continue
		}
		let colon = bytealg.IndexByteString(line, 58)
		if (colon == -1) {
			$.pointerValue<nssConf>(__goscriptShadow3).err = errors.New("no colon on line")
			return __goscriptShadow3
		}
		let db = __goscript_parse.trimSpace($.sliceStringOrBytes(line, undefined, colon))
		let srcs = $.sliceStringOrBytes(line, colon + 1, undefined)
		while (true) {
			srcs = __goscript_parse.trimSpace(srcs)
			if ($.stringLen(srcs) == 0) {
				break
			}
			let sp: number = bytealg.IndexByteString(srcs, 32)
			let src: string = ""
			if (sp == -1) {
				src = srcs
				srcs = ""
			} else {
				src = $.sliceStringOrBytes(srcs, undefined, sp)
				srcs = __goscript_parse.trimSpace($.sliceStringOrBytes(srcs, sp + 1, undefined))
			}
			let criteria: $.Slice<nssCriterion> = null! as $.Slice<nssCriterion>
			// See if there's a criteria block in brackets.
			if (($.stringLen(srcs) > 0) && ($.indexString(srcs, 0) == 91)) {
				let bclose: number = bytealg.IndexByteString(srcs, 93)
				if (bclose == -1) {
					$.pointerValue<nssConf>(__goscriptShadow3).err = errors.New("unclosed criterion bracket")
					return __goscriptShadow3
				}
				let err: $.GoError = null! as $.GoError
				let __goscriptTuple2: any = await parseCriteria($.sliceStringOrBytes(srcs, 1, bclose))
				criteria = __goscriptTuple2[0]
				err = __goscriptTuple2[1]
				if (err != null) {
					$.pointerValue<nssConf>(__goscriptShadow3).err = errors.New($.concatString("invalid criteria: ", $.sliceStringOrBytes(srcs, 1, bclose)))
					return __goscriptShadow3
				}
				srcs = $.sliceStringOrBytes(srcs, bclose + 1, undefined)
			}
			if ($.pointerValue<nssConf>(__goscriptShadow3).sources == null) {
				$.pointerValue<nssConf>(__goscriptShadow3).sources = $.makeMap<string, $.Slice<nssSource>>()
			}
			$.mapSet($.pointerValue<nssConf>(__goscriptShadow3).sources, db, $.appendOne($.mapGet<string, $.Slice<nssSource>, $.Slice<nssSource>>($.pointerValue<nssConf>(__goscriptShadow3).sources, db, null)[0], new nssSource({source: src, criteria: criteria}, true)))
		}
	}
	return __goscriptShadow3
}

export async function parseCriteria(x: string): globalThis.Promise<[$.Slice<nssCriterion>, $.GoError]> {
	let c: $.Slice<nssCriterion> = null! as $.Slice<nssCriterion>
	let err: $.GoError = null! as $.GoError
	err = await __goscript_parse.foreachField(x, $.functionValue((f: string): $.GoError => {
		let not = false
		if (($.stringLen(f) > 0) && ($.indexString(f, 0) == 33)) {
			not = true
			f = $.sliceStringOrBytes(f, 1, undefined)
		}
		if ($.stringLen(f) < 3) {
			return errors.New("criterion too short")
		}
		let eq = bytealg.IndexByteString(f, 61)
		if (eq == -1) {
			return errors.New("criterion lacks equal sign")
		}
		if (__goscript_parse.hasUpperCase(f)) {
			let lower: $.Slice<number> = $.stringToBytes(f)
			__goscript_parse.lowerASCIIBytes(lower)
			f = $.bytesToString(lower)
		}
		c = $.appendOne(c, new nssCriterion({negate: not, status: $.sliceStringOrBytes(f, undefined, eq), action: $.sliceStringOrBytes(f, eq + 1, undefined)}, true))
		return null
	}, ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string")], results: ["error"] } as $.FunctionTypeInfo)))
	return [c, err]
}

var __goscriptAwait: any
