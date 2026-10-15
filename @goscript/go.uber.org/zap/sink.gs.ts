// Generated file based on sink.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as url from "@goscript/net/url/index.js"

import * as os from "@goscript/os/index.js"

import * as filepath from "@goscript/path/filepath/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as zapcore from "@goscript/go.uber.org/zap/zapcore/index.js"

import type * as fs from "@goscript/io/fs/index.js"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/net/url/index.js"
import "@goscript/os/index.js"
import "@goscript/path/filepath/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/go.uber.org/zap/zapcore/index.js"

$.registerTypePackagePath("go.uber.org/zap", ["zap.Sink", "zap.errSinkNotFound", "zap.nopCloserSink", "zap.sinkRegistry"])

export type Sink = {
	Close(): $.GoError | globalThis.Promise<$.GoError>
	Sync(): $.GoError | globalThis.Promise<$.GoError>
	Write(p: $.Slice<number>): [number, $.GoError] | globalThis.Promise<[number, $.GoError]>
}

$.registerInterfaceType(
	"zap.Sink",
	null,
	[$.methodSignature("Close", [], ["error"]), $.methodSignature("Sync", [], ["error"]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])]
);

export class errSinkNotFound {
	public get scheme(): string {
		return this._fields.scheme
	}

	public set scheme(value: string) {
		this._fields.scheme = value
	}

	public _fields: {
		scheme: string
	}

	constructor(init?: Partial<{scheme?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			scheme: init?.scheme ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): errSinkNotFound {
		return new errSinkNotFound(this, true)
	}

	public __goscriptAssign(source: errSinkNotFound): void {
		const target = this._fields
		const values = source._fields
		target.scheme = values.scheme
	}

	public async Error(): globalThis.Promise<string> {
		const e: errSinkNotFound | $.VarRef<errSinkNotFound> | null = this;
		return fmt.Sprintf("no sink found for scheme %q", $.pointerValue<errSinkNotFound>(e).scheme)
	}

	static __typeInfo = $.registerStructType(
		"zap.errSinkNotFound",
		() => new errSinkNotFound(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")], true)],
		errSinkNotFound,
		() => [/* @__PURE__ */ $.structField("scheme", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "go.uber.org/zap" })]
	)
}

export class nopCloserSink {
	public get WriteSyncer(): zapcore.WriteSyncer | null {
		return this._fields.WriteSyncer
	}

	public set WriteSyncer(value: zapcore.WriteSyncer | null) {
		this._fields.WriteSyncer = value
	}

	public _fields: {
		WriteSyncer: zapcore.WriteSyncer | null
	}

	constructor(init?: Partial<{WriteSyncer?: zapcore.WriteSyncer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			WriteSyncer: init?.WriteSyncer ?? (null! as zapcore.WriteSyncer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): nopCloserSink {
		return new nopCloserSink(this, true)
	}

	public __goscriptAssign(source: nopCloserSink): void {
		const target = this._fields
		const values = source._fields
		target.WriteSyncer = $.assignFieldValue(target.WriteSyncer, values.WriteSyncer, "zapcore.WriteSyncer")
	}

	public Close(): $.GoError {
		return null
	}

	public async Sync(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<zapcore.WriteSyncer | null, null>>(this.WriteSyncer).Sync()
	}

	public async Write(p: any): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<zapcore.WriteSyncer | null, null>>(this.WriteSyncer).Write(p)
	}

	static __typeInfo = $.registerStructType(
		"zap.nopCloserSink",
		() => new nopCloserSink(),
		() => [$.methodSignature("Close", [], ["error"]), $.methodSignature("Sync", [], ["error"]), $.methodSignature("Write", [["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], [["n", /* @__PURE__ */ $.basicType("int")], ["err", "error"]])],
		nopCloserSink,
		() => [/* @__PURE__ */ $.structField("WriteSyncer", "zapcore.WriteSyncer", [0], 0, true, { anonymous: true })]
	)
}

export class sinkRegistry {
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get factories(): globalThis.Map<string, ((_p0: url.URL | $.VarRef<url.URL> | null) => [Sink | null, $.GoError] | globalThis.Promise<[Sink | null, $.GoError]>) | null> | null {
		return this._fields.factories
	}

	public set factories(value: globalThis.Map<string, ((_p0: url.URL | $.VarRef<url.URL> | null) => [Sink | null, $.GoError] | globalThis.Promise<[Sink | null, $.GoError]>) | null> | null) {
		this._fields.factories = value
	}

	public get openFile(): ((_p0: string, _p1: number, _p2: os.FileMode) => [os.File | $.VarRef<os.File> | null, $.GoError] | globalThis.Promise<[os.File | $.VarRef<os.File> | null, $.GoError]>) | null {
		return this._fields.openFile
	}

	public set openFile(value: ((_p0: string, _p1: number, _p2: os.FileMode) => [os.File | $.VarRef<os.File> | null, $.GoError] | globalThis.Promise<[os.File | $.VarRef<os.File> | null, $.GoError]>) | null) {
		this._fields.openFile = value
	}

	public _fields: {
		mu: sync.Mutex
		factories: globalThis.Map<string, ((_p0: url.URL | $.VarRef<url.URL> | null) => [Sink | null, $.GoError] | globalThis.Promise<[Sink | null, $.GoError]>) | null> | null
		openFile: ((_p0: string, _p1: number, _p2: os.FileMode) => [os.File | $.VarRef<os.File> | null, $.GoError] | globalThis.Promise<[os.File | $.VarRef<os.File> | null, $.GoError]>) | null
	}

	constructor(init?: Partial<{mu?: sync.Mutex, factories?: globalThis.Map<string, ((_p0: url.URL | $.VarRef<url.URL> | null) => [Sink | null, $.GoError] | globalThis.Promise<[Sink | null, $.GoError]>) | null> | null, openFile?: ((_p0: string, _p1: number, _p2: os.FileMode) => [os.File | $.VarRef<os.File> | null, $.GoError] | globalThis.Promise<[os.File | $.VarRef<os.File> | null, $.GoError]>) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			factories: init?.factories ?? (null! as globalThis.Map<string, ((_p0: url.URL | $.VarRef<url.URL> | null) => [Sink | null, $.GoError] | globalThis.Promise<[Sink | null, $.GoError]>) | null> | null),
			openFile: init?.openFile ?? (null! as ((_p0: string, _p1: number, _p2: os.FileMode) => [os.File | $.VarRef<os.File> | null, $.GoError] | globalThis.Promise<[os.File | $.VarRef<os.File> | null, $.GoError]>) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): sinkRegistry {
		return new sinkRegistry(this, true)
	}

	public __goscriptAssign(source: sinkRegistry): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.factories = values.factories
		target.openFile = values.openFile
	}

	public async RegisterSink(scheme: string, factory: ((_p0: url.URL | $.VarRef<url.URL> | null) => [Sink | null, $.GoError] | globalThis.Promise<[Sink | null, $.GoError]>) | null): globalThis.Promise<$.GoError> {
		let sr: sinkRegistry | $.VarRef<sinkRegistry> | null = this;
		using __defer = new $.DisposableStack()
		const sr$: sinkRegistry = sr == null ? $.pointerTarget<sinkRegistry>(sr) : (sr as any).__isVarRef === true ? (sr as any).value : (sr as any).__goValue === undefined ? (sr as any) : $.pointerTarget<sinkRegistry>(sr)
		await (sr$ as sinkRegistry).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((sr$ as sinkRegistry).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		if ($.stringEqual(scheme, "")) {
			return errors.New("can't register a sink factory for empty string")
		}
		let [normalized, err] = normalizeScheme(scheme)
		if (err != null) {
			return fmt.Errorf("%q is not a valid scheme: %v", scheme, (err as any))
		}
		{
			let [, ok] = $.mapGet<string, ((_p0: url.URL | $.VarRef<url.URL> | null) => [Sink | null, $.GoError] | globalThis.Promise<[Sink | null, $.GoError]>) | null, ((_p0: url.URL | $.VarRef<url.URL> | null) => [Sink | null, $.GoError] | globalThis.Promise<[Sink | null, $.GoError]>) | null>((sr$ as sinkRegistry).factories, normalized, null)
			if (ok) {
				return fmt.Errorf("sink factory already registered for scheme %q", normalized)
			}
		}
		$.mapSet((sr$ as sinkRegistry).factories, normalized, factory)
		return null
	}

	public async newFileSinkFromPath(path: string): globalThis.Promise<[Sink | null, $.GoError]> {
		const sr: sinkRegistry | $.VarRef<sinkRegistry> | null = this;
		switch (path) {
			case "stdout":
			{
				return [$.interfaceValue<Sink | null>(new nopCloserSink({WriteSyncer: $.interfaceValue<zapcore.WriteSyncer | null>(os.Stdout, "*os.File", /* @__PURE__ */ $.pointerType("os.File"))}, true), "zap.nopCloserSink", "zap.nopCloserSink"), null]
				break
			}
			case "stderr":
			{
				return [$.interfaceValue<Sink | null>(new nopCloserSink({WriteSyncer: $.interfaceValue<zapcore.WriteSyncer | null>(os.Stderr, "*os.File", /* @__PURE__ */ $.pointerType("os.File"))}, true), "zap.nopCloserSink", "zap.nopCloserSink"), null]
				break
			}
		}
		const __goscriptReturn0 = await $.pointerValue<sinkRegistry>(sr).openFile!(path, 1089, 0o666)
		return [$.interfaceValue<Sink | null>(__goscriptReturn0[0], "*os.File", /* @__PURE__ */ $.pointerType("os.File")), __goscriptReturn0[1]]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async newFileSinkFromURL(u: url.URL | $.VarRef<url.URL> | null): globalThis.Promise<[Sink | null, $.GoError]> {
		const sr: sinkRegistry | $.VarRef<sinkRegistry> | null = this;
		const u$: url.URL = u == null ? $.pointerTarget<url.URL>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<url.URL>(u)
		if ((u$ as url.URL).User != null) {
			return [null, fmt.Errorf("user and password not allowed with file URLs: got %v", $.interfaceValue(u, "*url.URL", /* @__PURE__ */ $.pointerType("url.URL")))]
		}
		if (!$.stringEqual((u$ as url.URL).Fragment, "")) {
			return [null, fmt.Errorf("fragments not allowed with file URLs: got %v", $.interfaceValue(u, "*url.URL", /* @__PURE__ */ $.pointerType("url.URL")))]
		}
		if (!$.stringEqual((u$ as url.URL).RawQuery, "")) {
			return [null, fmt.Errorf("query parameters not allowed with file URLs: got %v", $.interfaceValue(u, "*url.URL", /* @__PURE__ */ $.pointerType("url.URL")))]
		}
		// Error messages are better if we check hostname and port separately.
		if (!$.stringEqual((u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as url.URL).Port() : url.URL.prototype.Port.call(u)), "")) {
			return [null, fmt.Errorf("ports not allowed with file URLs: got %v", $.interfaceValue(u, "*url.URL", /* @__PURE__ */ $.pointerType("url.URL")))]
		}
		{
			let hn = (u !== null && (u as any).__isVarRef !== true && (u as any).__goValue === undefined ? ((u as any) as url.URL).Hostname() : url.URL.prototype.Hostname.call(u))
			if ((!$.stringEqual(hn, "")) && (!$.stringEqual(hn, "localhost"))) {
				return [null, fmt.Errorf("file URLs must leave host empty or use localhost: got %v", $.interfaceValue(u, "*url.URL", /* @__PURE__ */ $.pointerType("url.URL")))]
			}
		}

		return (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as sinkRegistry).newFileSinkFromPath((u$ as url.URL).Path) : sinkRegistry.prototype.newFileSinkFromPath.call(sr, (u$ as url.URL).Path))
	}

	public async newSink(rawURL: string): globalThis.Promise<[Sink | null, $.GoError]> {
		const sr: sinkRegistry | $.VarRef<sinkRegistry> | null = this;
		const sr$: sinkRegistry = sr == null ? $.pointerTarget<sinkRegistry>(sr) : (sr as any).__isVarRef === true ? (sr as any).value : (sr as any).__goValue === undefined ? (sr as any) : $.pointerTarget<sinkRegistry>(sr)
		// URL parsing doesn't work well for Windows paths such as `c:\log.txt`, as scheme is set to
		// the drive, and path is unset unless `c:/log.txt` is used.
		// To avoid Windows-specific URL handling, we instead check IsAbs to open as a file.
		// filepath.IsAbs is OS-specific, so IsAbs('c:/log.txt') is false outside of Windows.
		if (filepath.IsAbs(rawURL)) {
			return (sr !== null && (sr as any).__isVarRef !== true && (sr as any).__goValue === undefined ? ((sr as any) as sinkRegistry).newFileSinkFromPath(rawURL) : sinkRegistry.prototype.newFileSinkFromPath.call(sr, rawURL))
		}

		let __goscriptTuple0: any = url.Parse(rawURL)
		let u: url.URL | $.VarRef<url.URL> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		let u$: url.URL = u == null ? $.pointerTarget<url.URL>(u) : (u as any).__isVarRef === true ? (u as any).value : (u as any).__goValue === undefined ? (u as any) : $.pointerTarget<url.URL>(u)
		if (err != null) {
			return [null, fmt.Errorf("can't parse %q as a URL: %v", rawURL, (err as any))]
		}
		if ($.stringEqual((u$ as url.URL).Scheme, "")) {
			;(u$ as url.URL).Scheme = "file"
		}

		await (sr$ as sinkRegistry).mu.Lock()
		let [factory, ok] = $.mapGet<string, ((_p0: url.URL | $.VarRef<url.URL> | null) => [Sink | null, $.GoError] | globalThis.Promise<[Sink | null, $.GoError]>) | null, ((_p0: url.URL | $.VarRef<url.URL> | null) => [Sink | null, $.GoError] | globalThis.Promise<[Sink | null, $.GoError]>) | null>((sr$ as sinkRegistry).factories, (u$ as url.URL).Scheme, null)
		void (sr$ as sinkRegistry).mu.Unlock()
		if (!ok) {
			return [null, $.interfaceValue<$.GoError>(new errSinkNotFound({scheme: (u$ as url.URL).Scheme}), "*zap.errSinkNotFound", /* @__PURE__ */ $.pointerType("zap.errSinkNotFound"))]
		}
		return factory!(u)
	}

	static __typeInfo = $.registerStructType(
		"zap.sinkRegistry",
		() => new sinkRegistry(),
		() => [$.methodSignature("RegisterSink", [["scheme", /* @__PURE__ */ $.basicType("string")], ["factory", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("url.URL")], results: ["zap.Sink", "error"] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("newFileSinkFromPath", [["path", /* @__PURE__ */ $.basicType("string")]], ["zap.Sink", "error"], true), $.methodSignature("newFileSinkFromURL", [["u", /* @__PURE__ */ $.pointerType("url.URL")]], ["zap.Sink", "error"], true), $.methodSignature("newSink", [["rawURL", /* @__PURE__ */ $.basicType("string")]], ["zap.Sink", "error"], true)],
		sinkRegistry,
		() => [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "go.uber.org/zap" }), /* @__PURE__ */ $.structField("factories", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("url.URL")], results: ["zap.Sink", "error"] } as $.FunctionTypeInfo)), [1], 8, false, { pkgPath: "go.uber.org/zap" }), /* @__PURE__ */ $.structField("openFile", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.basicType("int"), /* @__PURE__ */ $.basicType("uint32", "fs.FileMode")], results: [/* @__PURE__ */ $.pointerType("os.File"), "error"] } as $.FunctionTypeInfo), [2], 16, false, { pkgPath: "go.uber.org/zap" })]
	)
}

export const schemeFile: string = "file"

export let _sinkRegistry: sinkRegistry | $.VarRef<sinkRegistry> | null = await newSinkRegistry()

export function __goscript_set__sinkRegistry(__goscriptValue: sinkRegistry | $.VarRef<sinkRegistry> | null): void {
	_sinkRegistry = __goscriptValue
}

export async function newSinkRegistry(): globalThis.Promise<sinkRegistry | $.VarRef<sinkRegistry> | null> {
	let sr: sinkRegistry | $.VarRef<sinkRegistry> | null = new sinkRegistry({factories: $.makeMap<string, ((_p0: url.URL | $.VarRef<url.URL> | null) => [Sink | null, $.GoError] | globalThis.Promise<[Sink | null, $.GoError]>) | null>(), openFile: os.OpenFile})
	// Infallible operation: the registry is empty, so we can't have a conflict.
	await sinkRegistry.prototype.RegisterSink.call(sr, "file", $.functionValue(((__receiver) => (u: url.URL | $.VarRef<url.URL> | null) => __receiver.newFileSinkFromURL(u))($.pointerValue<sinkRegistry>(sr)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("url.URL")], results: ["zap.Sink", "error"] } as $.FunctionTypeInfo), "go.uber.org/zap.(*sinkRegistry).newFileSinkFromURL-fm"))
	return sr
}

export async function RegisterSink(scheme: string, factory: ((_p0: url.URL | $.VarRef<url.URL> | null) => [Sink | null, $.GoError] | globalThis.Promise<[Sink | null, $.GoError]>) | null): globalThis.Promise<$.GoError> {
	return (_sinkRegistry !== null && (_sinkRegistry as any).__isVarRef !== true && (_sinkRegistry as any).__goValue === undefined ? ((_sinkRegistry as any) as sinkRegistry).RegisterSink(scheme, factory) : sinkRegistry.prototype.RegisterSink.call(_sinkRegistry, scheme, factory))
}

export function normalizeScheme(s: string): [string, $.GoError] {
	// https://tools.ietf.org/html/rfc3986#section-3.1
	s = strings.ToLower(s)
	{
		let first = $.indexString(s, 0)
		if ((97 > first) || (122 < first)) {
			return ["", errors.New("must start with a letter")]
		}
	}
	for (let i = 1; i < $.stringLen(s); i++) {
		let c = $.indexString(s, i)
		switch ((true as boolean)) {
			case (97 <= c) && (c <= 122):
			{
				continue
				break
			}
			case (48 <= c) && (c <= 57):
			{
				continue
				break
			}
			case ((c == 46) || (c == 43)) || (c == 45):
			{
				continue
				break
			}
		}
		return ["", fmt.Errorf("may not contain %q", $.basicInterfaceValue(c, "byte", "uint8"))]
	}
	return [s, null]
}
