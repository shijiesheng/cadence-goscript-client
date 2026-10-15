// Generated file based on rpc_util.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as gzip from "@goscript/compress/gzip/index.js"

import * as context from "@goscript/context/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as strings from "@goscript/strings/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as codes from "@goscript/google.golang.org/grpc/codes/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as encoding from "@goscript/google.golang.org/grpc/encoding/index.js"

import * as proto from "@goscript/google.golang.org/grpc/encoding/proto/index.js"

import * as transport from "@goscript/google.golang.org/grpc/internal/transport/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as peer from "@goscript/google.golang.org/grpc/peer/index.js"

import * as stats from "@goscript/google.golang.org/grpc/stats/index.js"

import * as status from "@goscript/google.golang.org/grpc/status/index.js"

import * as balancer from "@goscript/google.golang.org/grpc/balancer/index.js"

import * as channelz from "@goscript/google.golang.org/grpc/channelz/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as internal from "@goscript/google.golang.org/grpc/internal/index.js"

import * as backoff from "@goscript/google.golang.org/grpc/internal/backoff/index.js"

import * as gracefulswitch from "@goscript/google.golang.org/grpc/internal/balancer/gracefulswitch/index.js"

import * as binarylog from "@goscript/google.golang.org/grpc/internal/binarylog/index.js"

import * as channelz2 from "@goscript/google.golang.org/grpc/internal/channelz/index.js"

import * as grpcsync from "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"

import * as idle from "@goscript/google.golang.org/grpc/internal/idle/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/internal/resolver/index.js"

import * as serviceconfig from "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"

import * as stats2 from "@goscript/google.golang.org/grpc/internal/stats/index.js"

import * as status2 from "@goscript/google.golang.org/grpc/internal/status/index.js"

import * as keepalive from "@goscript/google.golang.org/grpc/keepalive/index.js"

import * as resolver2 from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as serviceconfig2 from "@goscript/google.golang.org/grpc/serviceconfig/index.js"

import * as net from "@goscript/net/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as __goscript_balancer_wrapper from "./balancer_wrapper.gs.ts"

import * as __goscript_call from "./call.gs.ts"

import * as __goscript_clientconn from "./clientconn.gs.ts"

import * as __goscript_codec from "./codec.gs.ts"

import * as __goscript_dialoptions from "./dialoptions.gs.ts"

import * as __goscript_interceptor from "./interceptor.gs.ts"

import * as __goscript_picker_wrapper from "./picker_wrapper.gs.ts"

import * as __goscript_resolver_wrapper from "./resolver_wrapper.gs.ts"

import * as __goscript_service_config from "./service_config.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"

import * as __goscript_trace from "./trace.gs.ts"

import * as __goscript_version from "./version.gs.ts"
import "@goscript/compress/gzip/index.js"
import "@goscript/context/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/grpc/codes/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/encoding/index.js"
import "@goscript/google.golang.org/grpc/encoding/proto/index.js"
import "@goscript/google.golang.org/grpc/internal/transport/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"
import "@goscript/google.golang.org/grpc/peer/index.js"
import "@goscript/google.golang.org/grpc/stats/index.js"
import "@goscript/google.golang.org/grpc/status/index.js"
import "@goscript/google.golang.org/grpc/balancer/index.js"
import "@goscript/google.golang.org/grpc/channelz/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/backoff/index.js"
import "@goscript/google.golang.org/grpc/internal/balancer/gracefulswitch/index.js"
import "@goscript/google.golang.org/grpc/internal/binarylog/index.js"
import "@goscript/google.golang.org/grpc/internal/channelz/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"
import "@goscript/google.golang.org/grpc/internal/idle/index.js"
import "@goscript/google.golang.org/grpc/internal/resolver/index.js"
import "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"
import "@goscript/google.golang.org/grpc/internal/stats/index.js"
import "@goscript/google.golang.org/grpc/internal/status/index.js"
import "@goscript/google.golang.org/grpc/keepalive/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/serviceconfig/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/atomic/index.js"
import "./balancer_wrapper.gs.ts"
import "./call.gs.ts"
import "./clientconn.gs.ts"
import "./codec.gs.ts"
import "./dialoptions.gs.ts"
import "./interceptor.gs.ts"
import "./picker_wrapper.gs.ts"
import "./resolver_wrapper.gs.ts"
import "./service_config.gs.ts"
import "./stream.gs.ts"
import "./trace.gs.ts"
import "./version.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc", ["grpc.Compressor", "grpc.gzipCompressor", "grpc.Decompressor", "grpc.gzipDecompressor", "grpc.callInfo", "grpc.CallOption", "grpc.EmptyCallOption", "grpc.StaticMethodCallOption", "grpc.HeaderCallOption", "grpc.TrailerCallOption", "grpc.PeerCallOption", "grpc.FailFastCallOption", "grpc.OnFinishCallOption", "grpc.MaxRecvMsgSizeCallOption", "grpc.MaxSendMsgSizeCallOption", "grpc.PerRPCCredsCallOption", "grpc.CompressorCallOption", "grpc.ContentSubtypeCallOption", "grpc.ForceCodecCallOption", "grpc.ForceCodecV2CallOption", "grpc.CustomCodecCallOption", "grpc.MaxRetryRPCBufferSizeCallOption", "grpc.payloadFormat", "grpc.streamReader", "grpc.parser", "grpc.payloadInfo", "grpc.rpcInfo", "grpc.compressorInfo", "grpc.rpcInfoContextKey"])

export type Compressor = {
	Do(w: io.Writer | null, p: $.Slice<number>): $.GoError | globalThis.Promise<$.GoError>
	Type(): string
}

$.registerInterfaceType(
	"grpc.Compressor",
	null,
	[$.methodSignature("Do", [["w", "io.Writer"], ["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"]), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type Decompressor = {
	Do(r: io.Reader | null): [$.Slice<number>, $.GoError] | globalThis.Promise<[$.Slice<number>, $.GoError]>
	Type(): string
}

$.registerInterfaceType(
	"grpc.Decompressor",
	null,
	[$.methodSignature("Do", [["r", "io.Reader"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"]), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type CallOption = {
	after(_p0: callInfo | $.VarRef<callInfo> | null, _p1: __goscript_stream.csAttempt | $.VarRef<__goscript_stream.csAttempt> | null): void
	before(_p0: callInfo | $.VarRef<callInfo> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"grpc.CallOption",
	null,
	[$.methodSignature("after", [/* @__PURE__ */ $.pointerType("grpc.callInfo"), /* @__PURE__ */ $.pointerType("grpc.csAttempt")]), $.methodSignature("before", [/* @__PURE__ */ $.pointerType("grpc.callInfo")], ["error"])]
);

export type payloadFormat = number

$.registerNamedValueType(
	"grpc.payloadFormat",
	{isCompressed: (receiver: any, ...args: any[]) => (payloadFormat_isCompressed as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("isCompressed", [], [/* @__PURE__ */ $.basicType("bool")])]
);

$.registerNamedValueType(
	"*grpc.payloadFormat",
	{isCompressed: (receiver: any, ...args: any[]) => (payloadFormat_isCompressed as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("isCompressed", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export type streamReader = {
	Read(n: number): [mem.BufferSlice, $.GoError] | globalThis.Promise<[mem.BufferSlice, $.GoError]>
	ReadHeader(header: $.Slice<number>): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"grpc.streamReader",
	null,
	[$.methodSignature("Read", [["n", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice"), "error"]), $.methodSignature("ReadHeader", [["header", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"])]
);

export class gzipCompressor {
	public get pool(): sync.Pool {
		return this._fields.pool
	}

	public set pool(value: sync.Pool) {
		this._fields.pool = value
	}

	public _fields: {
		pool: sync.Pool
	}

	constructor(init?: Partial<{pool?: sync.Pool}>, __goscriptValue?: boolean) {
		this._fields = {
			pool: init?.pool ? $.markAsStructValue($.cloneStructValue(init.pool)) : $.markAsStructValue(new sync.Pool())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): gzipCompressor {
		return new gzipCompressor(this, true)
	}

	public __goscriptAssign(source: gzipCompressor): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.pool, values.pool)
	}

	public async Do(w: io.Writer | null, p: $.Slice<number>): globalThis.Promise<$.GoError> {
		const c: gzipCompressor | $.VarRef<gzipCompressor> | null = this;
		using __defer = new $.DisposableStack()
		const c$: gzipCompressor = c == null ? $.pointerTarget<gzipCompressor>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<gzipCompressor>(c)
		let z: gzip.Writer | $.VarRef<gzip.Writer> | null = $.mustTypeAssert<gzip.Writer | $.VarRef<gzip.Writer> | null>(await (c$ as gzipCompressor).pool.Get(), /* @__PURE__ */ $.pointerType("gzip.Writer"))
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => (x: any) => __receiver.Put(x))((c$ as gzipCompressor).pool), ({ kind: $.TypeKind.Function, params: [{ kind: $.TypeKind.Interface, methods: [] }], results: [] } as $.FunctionTypeInfo), "sync.(*Pool).Put-fm")
		const __goscriptDeferArg0 = $.interfaceValue(z, "*gzip.Writer", /* @__PURE__ */ $.pointerType("gzip.Writer"))
		__defer.defer(() => { __goscriptDeferCallee0(__goscriptDeferArg0) })
		gzip.Writer.prototype.Reset.call($.pointerValue<gzip.Writer>(z), $.pointerValueOrNil(w)!)
		{
			let [, err] = await gzip.Writer.prototype.Write.call($.pointerValue<gzip.Writer>(z), p)
			if (err != null) {
				return err
			}
		}
		return await gzip.Writer.prototype.Close.call($.pointerValue<gzip.Writer>(z))
	}

	public Type(): string {
		const c: gzipCompressor | $.VarRef<gzipCompressor> | null = this;
		return "gzip"
	}

	static __typeInfo = $.registerStructType(
		"grpc.gzipCompressor",
		() => new gzipCompressor(),
		() => [$.methodSignature("Do", [["w", "io.Writer"], ["p", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["error"], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("string")], true)],
		gzipCompressor,
		() => [/* @__PURE__ */ $.structField("pool", "sync.Pool", [0], 0, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class gzipDecompressor {
	public get pool(): sync.Pool {
		return this._fields.pool
	}

	public set pool(value: sync.Pool) {
		this._fields.pool = value
	}

	public _fields: {
		pool: sync.Pool
	}

	constructor(init?: Partial<{pool?: sync.Pool}>, __goscriptValue?: boolean) {
		this._fields = {
			pool: init?.pool ? $.markAsStructValue($.cloneStructValue(init.pool)) : $.markAsStructValue(new sync.Pool())
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): gzipDecompressor {
		return new gzipDecompressor(this, true)
	}

	public __goscriptAssign(source: gzipDecompressor): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.pool, values.pool)
	}

	public async Do(r: io.Reader | null): globalThis.Promise<[$.Slice<number>, $.GoError]> {
		const d: gzipDecompressor | $.VarRef<gzipDecompressor> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		const d$: gzipDecompressor = d == null ? $.pointerTarget<gzipDecompressor>(d) : (d as any).__isVarRef === true ? (d as any).value : (d as any).__goValue === undefined ? (d as any) : $.pointerTarget<gzipDecompressor>(d)
		let z: gzip.Reader | $.VarRef<gzip.Reader> | null = null! as gzip.Reader | $.VarRef<gzip.Reader> | null
		{
			const __goscriptTypeSwitchValue = await (d$ as gzipDecompressor).pool.Get()
			switch (true) {
				case __goscriptTypeSwitchValue == null:
					{
						let maybeZ: any = __goscriptTypeSwitchValue
						let __goscriptTuple1: any = await gzip.NewReader($.pointerValueOrNil(r)!)
						let newZ: gzip.Reader | $.VarRef<gzip.Reader> | null = __goscriptTuple1[0]
						let err = __goscriptTuple1[1]
						if (err != null) {
							return [null, err]
						}
						z = newZ
					}
					break
				case $.typeAssert<gzip.Reader | $.VarRef<gzip.Reader> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("gzip.Reader")).ok:
					{
						let maybeZ: gzip.Reader | $.VarRef<gzip.Reader> | null = $.typeAssert<gzip.Reader | $.VarRef<gzip.Reader> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("gzip.Reader")).value
						z = maybeZ
						{
							let err = await gzip.Reader.prototype.Reset.call($.pointerValue<gzip.Reader>(z), $.pointerValueOrNil(r)!)
							if (err != null) {
								void (d$ as gzipDecompressor).pool.Put($.interfaceValue(z, "*gzip.Reader", /* @__PURE__ */ $.pointerType("gzip.Reader")))
								return [null, err]
							}
						}
					}
					break
			}
		}

		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			await gzip.Reader.prototype.Close.call($.pointerValue<gzip.Reader>(z))
			void (d$ as gzipDecompressor).pool.Put($.interfaceValue(z, "*gzip.Reader", /* @__PURE__ */ $.pointerType("gzip.Reader")))
		})() })
		return await io.ReadAll($.pointerValueOrNil($.interfaceValue<io.Reader | null>(z, "*gzip.Reader", /* @__PURE__ */ $.pointerType("gzip.Reader")))!)
	}

	public Type(): string {
		const d: gzipDecompressor | $.VarRef<gzipDecompressor> | null = this;
		return "gzip"
	}

	static __typeInfo = $.registerStructType(
		"grpc.gzipDecompressor",
		() => new gzipDecompressor(),
		() => [$.methodSignature("Do", [["r", "io.Reader"]], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")), "error"], true), $.methodSignature("Type", [], [/* @__PURE__ */ $.basicType("string")], true)],
		gzipDecompressor,
		() => [/* @__PURE__ */ $.structField("pool", "sync.Pool", [0], 0, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class callInfo {
	public get compressorType(): string {
		return this._fields.compressorType
	}

	public set compressorType(value: string) {
		this._fields.compressorType = value
	}

	public get failFast(): boolean {
		return this._fields.failFast
	}

	public set failFast(value: boolean) {
		this._fields.failFast = value
	}

	public get maxReceiveMessageSize(): $.VarRef<number> | null {
		return this._fields.maxReceiveMessageSize
	}

	public set maxReceiveMessageSize(value: $.VarRef<number> | null) {
		this._fields.maxReceiveMessageSize = value
	}

	public get maxSendMessageSize(): $.VarRef<number> | null {
		return this._fields.maxSendMessageSize
	}

	public set maxSendMessageSize(value: $.VarRef<number> | null) {
		this._fields.maxSendMessageSize = value
	}

	public get creds(): credentials.PerRPCCredentials | null {
		return this._fields.creds
	}

	public set creds(value: credentials.PerRPCCredentials | null) {
		this._fields.creds = value
	}

	public get contentSubtype(): string {
		return this._fields.contentSubtype
	}

	public set contentSubtype(value: string) {
		this._fields.contentSubtype = value
	}

	public get codec(): __goscript_codec.baseCodec | null {
		return this._fields.codec
	}

	public set codec(value: __goscript_codec.baseCodec | null) {
		this._fields.codec = value
	}

	public get maxRetryRPCBufferSize(): number {
		return this._fields.maxRetryRPCBufferSize
	}

	public set maxRetryRPCBufferSize(value: number) {
		this._fields.maxRetryRPCBufferSize = value
	}

	public get onFinish(): $.Slice<((err: $.GoError) => void) | null> {
		return this._fields.onFinish
	}

	public set onFinish(value: $.Slice<((err: $.GoError) => void) | null>) {
		this._fields.onFinish = value
	}

	public _fields: {
		compressorType: string
		failFast: boolean
		maxReceiveMessageSize: $.VarRef<number> | null
		maxSendMessageSize: $.VarRef<number> | null
		creds: credentials.PerRPCCredentials | null
		contentSubtype: string
		codec: __goscript_codec.baseCodec | null
		maxRetryRPCBufferSize: number
		onFinish: $.Slice<((err: $.GoError) => void) | null>
	}

	constructor(init?: Partial<{compressorType?: string, failFast?: boolean, maxReceiveMessageSize?: $.VarRef<number> | null, maxSendMessageSize?: $.VarRef<number> | null, creds?: credentials.PerRPCCredentials | null, contentSubtype?: string, codec?: __goscript_codec.baseCodec | null, maxRetryRPCBufferSize?: number, onFinish?: $.Slice<((err: $.GoError) => void) | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			compressorType: init?.compressorType ?? ("" as string),
			failFast: init?.failFast ?? (false as boolean),
			maxReceiveMessageSize: init?.maxReceiveMessageSize ?? (null! as $.VarRef<number> | null),
			maxSendMessageSize: init?.maxSendMessageSize ?? (null! as $.VarRef<number> | null),
			creds: init?.creds ?? (null! as credentials.PerRPCCredentials | null),
			contentSubtype: init?.contentSubtype ?? ("" as string),
			codec: init?.codec ?? (null! as __goscript_codec.baseCodec | null),
			maxRetryRPCBufferSize: init?.maxRetryRPCBufferSize ?? (0 as number),
			onFinish: init?.onFinish ?? (null! as $.Slice<((err: $.GoError) => void) | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): callInfo {
		return new callInfo(this, true)
	}

	public __goscriptAssign(source: callInfo): void {
		const target = this._fields
		const values = source._fields
		target.compressorType = values.compressorType
		target.failFast = values.failFast
		target.maxReceiveMessageSize = values.maxReceiveMessageSize
		target.maxSendMessageSize = values.maxSendMessageSize
		target.creds = $.assignFieldValue(target.creds, values.creds, "credentials.PerRPCCredentials")
		target.contentSubtype = values.contentSubtype
		target.codec = $.assignFieldValue(target.codec, values.codec, "grpc.baseCodec")
		target.maxRetryRPCBufferSize = values.maxRetryRPCBufferSize
		target.onFinish = values.onFinish
	}

	static __typeInfo = $.registerStructType(
		"grpc.callInfo",
		() => new callInfo(),
		() => [],
		callInfo,
		() => [/* @__PURE__ */ $.structField("compressorType", /* @__PURE__ */ $.basicType("string"), [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("failFast", /* @__PURE__ */ $.basicType("bool"), [1], 16, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("maxReceiveMessageSize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int")), [2], 24, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("maxSendMessageSize", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int")), [3], 32, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("creds", "credentials.PerRPCCredentials", [4], 40, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("contentSubtype", /* @__PURE__ */ $.basicType("string"), [5], 56, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("codec", "grpc.baseCodec", [6], 72, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("maxRetryRPCBufferSize", /* @__PURE__ */ $.basicType("int"), [7], 88, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("onFinish", /* @__PURE__ */ $.sliceType(({ kind: $.TypeKind.Function, params: ["error"], results: [] } as $.FunctionTypeInfo)), [8], 96, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class EmptyCallOption {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): EmptyCallOption {
		return new EmptyCallOption(this, true)
	}

	public __goscriptAssign(source: EmptyCallOption): void {
	}

	public after(_p0: callInfo | $.VarRef<callInfo> | null, _p1: __goscript_stream.csAttempt | $.VarRef<__goscript_stream.csAttempt> | null): void {
	}

	public before(_p0: callInfo | $.VarRef<callInfo> | null): $.GoError {
		return null
	}

	static __typeInfo = $.registerStructType(
		"grpc.EmptyCallOption",
		() => new EmptyCallOption(),
		() => [$.methodSignature("after", [/* @__PURE__ */ $.pointerType("grpc.callInfo"), /* @__PURE__ */ $.pointerType("grpc.csAttempt")]), $.methodSignature("before", [/* @__PURE__ */ $.pointerType("grpc.callInfo")], ["error"])],
		EmptyCallOption,
		() => []
	)
}

export class StaticMethodCallOption {
	public get EmptyCallOption(): EmptyCallOption {
		return this._fields.EmptyCallOption
	}

	public set EmptyCallOption(value: EmptyCallOption) {
		this._fields.EmptyCallOption = value
	}

	public _fields: {
		EmptyCallOption: EmptyCallOption
	}

	constructor(init?: Partial<{EmptyCallOption?: EmptyCallOption}>, __goscriptValue?: boolean) {
		this._fields = {
			EmptyCallOption: init?.EmptyCallOption ? init.EmptyCallOption.clone() : new EmptyCallOption(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): StaticMethodCallOption {
		return new StaticMethodCallOption(this, true)
	}

	public __goscriptAssign(source: StaticMethodCallOption): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.EmptyCallOption, values.EmptyCallOption)
	}

	public after(_p0: any, _p1: any): any {
		return $.pointerValue<EmptyCallOption>(this.EmptyCallOption).after(_p0, _p1)
	}

	public before(_p0: any): any {
		return $.pointerValue<EmptyCallOption>(this.EmptyCallOption).before(_p0)
	}

	static __typeInfo = $.registerStructType(
		"grpc.StaticMethodCallOption",
		() => new StaticMethodCallOption(),
		() => [$.methodSignature("after", [/* @__PURE__ */ $.pointerType("grpc.callInfo"), /* @__PURE__ */ $.pointerType("grpc.csAttempt")]), $.methodSignature("before", [/* @__PURE__ */ $.pointerType("grpc.callInfo")], ["error"])],
		StaticMethodCallOption,
		() => [/* @__PURE__ */ $.structField("EmptyCallOption", "grpc.EmptyCallOption", [0], 0, true, { anonymous: true })]
	)
}

export class HeaderCallOption {
	public get HeaderAddr(): $.VarRef<metadata.MD> | null {
		return this._fields.HeaderAddr
	}

	public set HeaderAddr(value: $.VarRef<metadata.MD> | null) {
		this._fields.HeaderAddr = value
	}

	public _fields: {
		HeaderAddr: $.VarRef<metadata.MD> | null
	}

	constructor(init?: Partial<{HeaderAddr?: $.VarRef<metadata.MD> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			HeaderAddr: init?.HeaderAddr ?? (null! as $.VarRef<metadata.MD> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HeaderCallOption {
		return new HeaderCallOption(this, true)
	}

	public __goscriptAssign(source: HeaderCallOption): void {
		const target = this._fields
		const values = source._fields
		target.HeaderAddr = values.HeaderAddr
	}

	public async after(_p0: callInfo | $.VarRef<callInfo> | null, attempt: __goscript_stream.csAttempt | $.VarRef<__goscript_stream.csAttempt> | null): globalThis.Promise<void> {
		let o: HeaderCallOption = this;
		let __goscriptTuple2: any = await transport.Stream.prototype.Header.call($.pointerValue<__goscript_stream.csAttempt>(attempt).s)
		o.HeaderAddr!.value = __goscriptTuple2[0]
	}

	public before(_p0: callInfo | $.VarRef<callInfo> | null): $.GoError {
		const o = this;
		return null
	}

	static __typeInfo = $.registerStructType(
		"grpc.HeaderCallOption",
		() => new HeaderCallOption(),
		() => [$.methodSignature("after", [["_", /* @__PURE__ */ $.pointerType("grpc.callInfo")], ["attempt", /* @__PURE__ */ $.pointerType("grpc.csAttempt")]]), $.methodSignature("before", [/* @__PURE__ */ $.pointerType("grpc.callInfo")], ["error"])],
		HeaderCallOption,
		() => [/* @__PURE__ */ $.structField("HeaderAddr", /* @__PURE__ */ $.pointerType("metadata.MD"), [0], 0, true)]
	)
}

export class TrailerCallOption {
	public get TrailerAddr(): $.VarRef<metadata.MD> | null {
		return this._fields.TrailerAddr
	}

	public set TrailerAddr(value: $.VarRef<metadata.MD> | null) {
		this._fields.TrailerAddr = value
	}

	public _fields: {
		TrailerAddr: $.VarRef<metadata.MD> | null
	}

	constructor(init?: Partial<{TrailerAddr?: $.VarRef<metadata.MD> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			TrailerAddr: init?.TrailerAddr ?? (null! as $.VarRef<metadata.MD> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TrailerCallOption {
		return new TrailerCallOption(this, true)
	}

	public __goscriptAssign(source: TrailerCallOption): void {
		const target = this._fields
		const values = source._fields
		target.TrailerAddr = values.TrailerAddr
	}

	public after(_p0: callInfo | $.VarRef<callInfo> | null, attempt: __goscript_stream.csAttempt | $.VarRef<__goscript_stream.csAttempt> | null): void {
		let o: TrailerCallOption = this;
		o.TrailerAddr!.value = transport.Stream.prototype.Trailer.call($.pointerValue<__goscript_stream.csAttempt>(attempt).s)
	}

	public before(_p0: callInfo | $.VarRef<callInfo> | null): $.GoError {
		const o = this;
		return null
	}

	static __typeInfo = $.registerStructType(
		"grpc.TrailerCallOption",
		() => new TrailerCallOption(),
		() => [$.methodSignature("after", [["_", /* @__PURE__ */ $.pointerType("grpc.callInfo")], ["attempt", /* @__PURE__ */ $.pointerType("grpc.csAttempt")]]), $.methodSignature("before", [/* @__PURE__ */ $.pointerType("grpc.callInfo")], ["error"])],
		TrailerCallOption,
		() => [/* @__PURE__ */ $.structField("TrailerAddr", /* @__PURE__ */ $.pointerType("metadata.MD"), [0], 0, true)]
	)
}

export class PeerCallOption {
	public get PeerAddr(): peer.Peer | $.VarRef<peer.Peer> | null {
		return this._fields.PeerAddr
	}

	public set PeerAddr(value: peer.Peer | $.VarRef<peer.Peer> | null) {
		this._fields.PeerAddr = value
	}

	public _fields: {
		PeerAddr: peer.Peer | $.VarRef<peer.Peer> | null
	}

	constructor(init?: Partial<{PeerAddr?: peer.Peer | $.VarRef<peer.Peer> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			PeerAddr: init?.PeerAddr ?? (null! as peer.Peer | $.VarRef<peer.Peer> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PeerCallOption {
		return new PeerCallOption(this, true)
	}

	public __goscriptAssign(source: PeerCallOption): void {
		const target = this._fields
		const values = source._fields
		target.PeerAddr = values.PeerAddr
	}

	public async after(_p0: callInfo | $.VarRef<callInfo> | null, attempt: __goscript_stream.csAttempt | $.VarRef<__goscript_stream.csAttempt> | null): globalThis.Promise<void> {
		let o: PeerCallOption = this;
		{
			let __goscriptTuple3: any = await peer.FromContext(transport.Stream.prototype.Context.call($.pointerValue<__goscript_stream.csAttempt>(attempt).s))
			let x: peer.Peer | $.VarRef<peer.Peer> | null = __goscriptTuple3[0]
			let ok = __goscriptTuple3[1]
			if (ok) {
				$.assignStruct($.pointerValue<peer.Peer>(o.PeerAddr), $.pointerValue<peer.Peer>(x))
			}
		}
	}

	public before(_p0: callInfo | $.VarRef<callInfo> | null): $.GoError {
		const o = this;
		return null
	}

	static __typeInfo = $.registerStructType(
		"grpc.PeerCallOption",
		() => new PeerCallOption(),
		() => [$.methodSignature("after", [["_", /* @__PURE__ */ $.pointerType("grpc.callInfo")], ["attempt", /* @__PURE__ */ $.pointerType("grpc.csAttempt")]]), $.methodSignature("before", [/* @__PURE__ */ $.pointerType("grpc.callInfo")], ["error"])],
		PeerCallOption,
		() => [/* @__PURE__ */ $.structField("PeerAddr", /* @__PURE__ */ $.pointerType("peer.Peer"), [0], 0, true)]
	)
}

export class FailFastCallOption {
	public get FailFast(): boolean {
		return this._fields.FailFast
	}

	public set FailFast(value: boolean) {
		this._fields.FailFast = value
	}

	public _fields: {
		FailFast: boolean
	}

	constructor(init?: Partial<{FailFast?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			FailFast: init?.FailFast ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): FailFastCallOption {
		return new FailFastCallOption(this, true)
	}

	public __goscriptAssign(source: FailFastCallOption): void {
		const target = this._fields
		const values = source._fields
		target.FailFast = values.FailFast
	}

	public after(_p0: callInfo | $.VarRef<callInfo> | null, _p1: __goscript_stream.csAttempt | $.VarRef<__goscript_stream.csAttempt> | null): void {
		const o = this;
	}

	public before(c: callInfo | $.VarRef<callInfo> | null): $.GoError {
		const o = this;
		$.pointerValue<callInfo>(c).failFast = o.FailFast
		return null
	}

	static __typeInfo = $.registerStructType(
		"grpc.FailFastCallOption",
		() => new FailFastCallOption(),
		() => [$.methodSignature("after", [/* @__PURE__ */ $.pointerType("grpc.callInfo"), /* @__PURE__ */ $.pointerType("grpc.csAttempt")]), $.methodSignature("before", [["c", /* @__PURE__ */ $.pointerType("grpc.callInfo")]], ["error"])],
		FailFastCallOption,
		() => [/* @__PURE__ */ $.structField("FailFast", /* @__PURE__ */ $.basicType("bool"), [0], 0, true)]
	)
}

export class OnFinishCallOption {
	public get OnFinish(): ((_p0: $.GoError) => void) | null {
		return this._fields.OnFinish
	}

	public set OnFinish(value: ((_p0: $.GoError) => void) | null) {
		this._fields.OnFinish = value
	}

	public _fields: {
		OnFinish: ((_p0: $.GoError) => void) | null
	}

	constructor(init?: Partial<{OnFinish?: ((_p0: $.GoError) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			OnFinish: init?.OnFinish ?? (null! as ((_p0: $.GoError) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): OnFinishCallOption {
		return new OnFinishCallOption(this, true)
	}

	public __goscriptAssign(source: OnFinishCallOption): void {
		const target = this._fields
		const values = source._fields
		target.OnFinish = values.OnFinish
	}

	public after(_p0: callInfo | $.VarRef<callInfo> | null, _p1: __goscript_stream.csAttempt | $.VarRef<__goscript_stream.csAttempt> | null): void {
		const o = this;
	}

	public before(c: callInfo | $.VarRef<callInfo> | null): $.GoError {
		const o = this;
		const c$: callInfo = c == null ? $.pointerTarget<callInfo>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<callInfo>(c);
		;(c$ as callInfo).onFinish = $.appendOne((c$ as callInfo).onFinish, o.OnFinish, $.appendZeros.nil)
		return null
	}

	static __typeInfo = $.registerStructType(
		"grpc.OnFinishCallOption",
		() => new OnFinishCallOption(),
		() => [$.methodSignature("after", [/* @__PURE__ */ $.pointerType("grpc.callInfo"), /* @__PURE__ */ $.pointerType("grpc.csAttempt")]), $.methodSignature("before", [["c", /* @__PURE__ */ $.pointerType("grpc.callInfo")]], ["error"])],
		OnFinishCallOption,
		() => [/* @__PURE__ */ $.structField("OnFinish", ({ kind: $.TypeKind.Function, params: ["error"], results: [] } as $.FunctionTypeInfo), [0], 0, true)]
	)
}

export class MaxRecvMsgSizeCallOption {
	public get MaxRecvMsgSize(): number {
		return this._fields.MaxRecvMsgSize
	}

	public set MaxRecvMsgSize(value: number) {
		this._fields.MaxRecvMsgSize = value
	}

	public _fields: {
		MaxRecvMsgSize: number
	}

	constructor(init?: Partial<{MaxRecvMsgSize?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			MaxRecvMsgSize: init?.MaxRecvMsgSize ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MaxRecvMsgSizeCallOption {
		return new MaxRecvMsgSizeCallOption(this, true)
	}

	public __goscriptAssign(source: MaxRecvMsgSizeCallOption): void {
		const target = this._fields
		const values = source._fields
		target.MaxRecvMsgSize = values.MaxRecvMsgSize
	}

	public after(_p0: callInfo | $.VarRef<callInfo> | null, _p1: __goscript_stream.csAttempt | $.VarRef<__goscript_stream.csAttempt> | null): void {
		const o = this;
	}

	public before(c: callInfo | $.VarRef<callInfo> | null): $.GoError {
		const o = this;
		$.pointerValue<callInfo>(c).maxReceiveMessageSize = $.fieldRef(o._fields, "MaxRecvMsgSize")
		return null
	}

	static __typeInfo = $.registerStructType(
		"grpc.MaxRecvMsgSizeCallOption",
		() => new MaxRecvMsgSizeCallOption(),
		() => [$.methodSignature("after", [/* @__PURE__ */ $.pointerType("grpc.callInfo"), /* @__PURE__ */ $.pointerType("grpc.csAttempt")]), $.methodSignature("before", [["c", /* @__PURE__ */ $.pointerType("grpc.callInfo")]], ["error"])],
		MaxRecvMsgSizeCallOption,
		() => [/* @__PURE__ */ $.structField("MaxRecvMsgSize", /* @__PURE__ */ $.basicType("int"), [0], 0, true)]
	)
}

export class MaxSendMsgSizeCallOption {
	public get MaxSendMsgSize(): number {
		return this._fields.MaxSendMsgSize
	}

	public set MaxSendMsgSize(value: number) {
		this._fields.MaxSendMsgSize = value
	}

	public _fields: {
		MaxSendMsgSize: number
	}

	constructor(init?: Partial<{MaxSendMsgSize?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			MaxSendMsgSize: init?.MaxSendMsgSize ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MaxSendMsgSizeCallOption {
		return new MaxSendMsgSizeCallOption(this, true)
	}

	public __goscriptAssign(source: MaxSendMsgSizeCallOption): void {
		const target = this._fields
		const values = source._fields
		target.MaxSendMsgSize = values.MaxSendMsgSize
	}

	public after(_p0: callInfo | $.VarRef<callInfo> | null, _p1: __goscript_stream.csAttempt | $.VarRef<__goscript_stream.csAttempt> | null): void {
		const o = this;
	}

	public before(c: callInfo | $.VarRef<callInfo> | null): $.GoError {
		const o = this;
		$.pointerValue<callInfo>(c).maxSendMessageSize = $.fieldRef(o._fields, "MaxSendMsgSize")
		return null
	}

	static __typeInfo = $.registerStructType(
		"grpc.MaxSendMsgSizeCallOption",
		() => new MaxSendMsgSizeCallOption(),
		() => [$.methodSignature("after", [/* @__PURE__ */ $.pointerType("grpc.callInfo"), /* @__PURE__ */ $.pointerType("grpc.csAttempt")]), $.methodSignature("before", [["c", /* @__PURE__ */ $.pointerType("grpc.callInfo")]], ["error"])],
		MaxSendMsgSizeCallOption,
		() => [/* @__PURE__ */ $.structField("MaxSendMsgSize", /* @__PURE__ */ $.basicType("int"), [0], 0, true)]
	)
}

export class PerRPCCredsCallOption {
	public get Creds(): credentials.PerRPCCredentials | null {
		return this._fields.Creds
	}

	public set Creds(value: credentials.PerRPCCredentials | null) {
		this._fields.Creds = value
	}

	public _fields: {
		Creds: credentials.PerRPCCredentials | null
	}

	constructor(init?: Partial<{Creds?: credentials.PerRPCCredentials | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Creds: init?.Creds ?? (null! as credentials.PerRPCCredentials | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PerRPCCredsCallOption {
		return new PerRPCCredsCallOption(this, true)
	}

	public __goscriptAssign(source: PerRPCCredsCallOption): void {
		const target = this._fields
		const values = source._fields
		target.Creds = $.assignFieldValue(target.Creds, values.Creds, "credentials.PerRPCCredentials")
	}

	public after(_p0: callInfo | $.VarRef<callInfo> | null, _p1: __goscript_stream.csAttempt | $.VarRef<__goscript_stream.csAttempt> | null): void {
		const o = this;
	}

	public before(c: callInfo | $.VarRef<callInfo> | null): $.GoError {
		const o = this;
		$.pointerValue<callInfo>(c).creds = o.Creds
		return null
	}

	static __typeInfo = $.registerStructType(
		"grpc.PerRPCCredsCallOption",
		() => new PerRPCCredsCallOption(),
		() => [$.methodSignature("after", [/* @__PURE__ */ $.pointerType("grpc.callInfo"), /* @__PURE__ */ $.pointerType("grpc.csAttempt")]), $.methodSignature("before", [["c", /* @__PURE__ */ $.pointerType("grpc.callInfo")]], ["error"])],
		PerRPCCredsCallOption,
		() => [/* @__PURE__ */ $.structField("Creds", "credentials.PerRPCCredentials", [0], 0, true)]
	)
}

export class CompressorCallOption {
	public get CompressorType(): string {
		return this._fields.CompressorType
	}

	public set CompressorType(value: string) {
		this._fields.CompressorType = value
	}

	public _fields: {
		CompressorType: string
	}

	constructor(init?: Partial<{CompressorType?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			CompressorType: init?.CompressorType ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CompressorCallOption {
		return new CompressorCallOption(this, true)
	}

	public __goscriptAssign(source: CompressorCallOption): void {
		const target = this._fields
		const values = source._fields
		target.CompressorType = values.CompressorType
	}

	public after(_p0: callInfo | $.VarRef<callInfo> | null, _p1: __goscript_stream.csAttempt | $.VarRef<__goscript_stream.csAttempt> | null): void {
		const o = this;
	}

	public before(c: callInfo | $.VarRef<callInfo> | null): $.GoError {
		const o = this;
		$.pointerValue<callInfo>(c).compressorType = o.CompressorType
		return null
	}

	static __typeInfo = $.registerStructType(
		"grpc.CompressorCallOption",
		() => new CompressorCallOption(),
		() => [$.methodSignature("after", [/* @__PURE__ */ $.pointerType("grpc.callInfo"), /* @__PURE__ */ $.pointerType("grpc.csAttempt")]), $.methodSignature("before", [["c", /* @__PURE__ */ $.pointerType("grpc.callInfo")]], ["error"])],
		CompressorCallOption,
		() => [/* @__PURE__ */ $.structField("CompressorType", /* @__PURE__ */ $.basicType("string"), [0], 0, true)]
	)
}

export class ContentSubtypeCallOption {
	public get ContentSubtype(): string {
		return this._fields.ContentSubtype
	}

	public set ContentSubtype(value: string) {
		this._fields.ContentSubtype = value
	}

	public _fields: {
		ContentSubtype: string
	}

	constructor(init?: Partial<{ContentSubtype?: string}>, __goscriptValue?: boolean) {
		this._fields = {
			ContentSubtype: init?.ContentSubtype ?? ("" as string)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ContentSubtypeCallOption {
		return new ContentSubtypeCallOption(this, true)
	}

	public __goscriptAssign(source: ContentSubtypeCallOption): void {
		const target = this._fields
		const values = source._fields
		target.ContentSubtype = values.ContentSubtype
	}

	public after(_p0: callInfo | $.VarRef<callInfo> | null, _p1: __goscript_stream.csAttempt | $.VarRef<__goscript_stream.csAttempt> | null): void {
		const o = this;
	}

	public before(c: callInfo | $.VarRef<callInfo> | null): $.GoError {
		const o = this;
		$.pointerValue<callInfo>(c).contentSubtype = o.ContentSubtype
		return null
	}

	static __typeInfo = $.registerStructType(
		"grpc.ContentSubtypeCallOption",
		() => new ContentSubtypeCallOption(),
		() => [$.methodSignature("after", [/* @__PURE__ */ $.pointerType("grpc.callInfo"), /* @__PURE__ */ $.pointerType("grpc.csAttempt")]), $.methodSignature("before", [["c", /* @__PURE__ */ $.pointerType("grpc.callInfo")]], ["error"])],
		ContentSubtypeCallOption,
		() => [/* @__PURE__ */ $.structField("ContentSubtype", /* @__PURE__ */ $.basicType("string"), [0], 0, true)]
	)
}

export class ForceCodecCallOption {
	public get Codec(): encoding.Codec | null {
		return this._fields.Codec
	}

	public set Codec(value: encoding.Codec | null) {
		this._fields.Codec = value
	}

	public _fields: {
		Codec: encoding.Codec | null
	}

	constructor(init?: Partial<{Codec?: encoding.Codec | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Codec: init?.Codec ?? (null! as encoding.Codec | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ForceCodecCallOption {
		return new ForceCodecCallOption(this, true)
	}

	public __goscriptAssign(source: ForceCodecCallOption): void {
		const target = this._fields
		const values = source._fields
		target.Codec = $.assignFieldValue(target.Codec, values.Codec, "encoding.Codec")
	}

	public after(_p0: callInfo | $.VarRef<callInfo> | null, _p1: __goscript_stream.csAttempt | $.VarRef<__goscript_stream.csAttempt> | null): void {
		const o = this;
	}

	public async before(c: callInfo | $.VarRef<callInfo> | null): globalThis.Promise<$.GoError> {
		const o = this;
		$.pointerValue<callInfo>(c).codec = (await __goscript_codec.newCodecV1Bridge(o.Codec) as __goscript_codec.baseCodec | null)
		return null
	}

	static __typeInfo = $.registerStructType(
		"grpc.ForceCodecCallOption",
		() => new ForceCodecCallOption(),
		() => [$.methodSignature("after", [/* @__PURE__ */ $.pointerType("grpc.callInfo"), /* @__PURE__ */ $.pointerType("grpc.csAttempt")]), $.methodSignature("before", [["c", /* @__PURE__ */ $.pointerType("grpc.callInfo")]], ["error"])],
		ForceCodecCallOption,
		() => [/* @__PURE__ */ $.structField("Codec", "encoding.Codec", [0], 0, true)]
	)
}

export class ForceCodecV2CallOption {
	public get CodecV2(): encoding.CodecV2 | null {
		return this._fields.CodecV2
	}

	public set CodecV2(value: encoding.CodecV2 | null) {
		this._fields.CodecV2 = value
	}

	public _fields: {
		CodecV2: encoding.CodecV2 | null
	}

	constructor(init?: Partial<{CodecV2?: encoding.CodecV2 | null}>, __goscriptValue?: boolean) {
		this._fields = {
			CodecV2: init?.CodecV2 ?? (null! as encoding.CodecV2 | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ForceCodecV2CallOption {
		return new ForceCodecV2CallOption(this, true)
	}

	public __goscriptAssign(source: ForceCodecV2CallOption): void {
		const target = this._fields
		const values = source._fields
		target.CodecV2 = $.assignFieldValue(target.CodecV2, values.CodecV2, "encoding.CodecV2")
	}

	public after(_p0: callInfo | $.VarRef<callInfo> | null, _p1: __goscript_stream.csAttempt | $.VarRef<__goscript_stream.csAttempt> | null): void {
		const o = this;
	}

	public before(c: callInfo | $.VarRef<callInfo> | null): $.GoError {
		const o = this;
		$.pointerValue<callInfo>(c).codec = (o.CodecV2 as __goscript_codec.baseCodec | null)
		return null
	}

	static __typeInfo = $.registerStructType(
		"grpc.ForceCodecV2CallOption",
		() => new ForceCodecV2CallOption(),
		() => [$.methodSignature("after", [/* @__PURE__ */ $.pointerType("grpc.callInfo"), /* @__PURE__ */ $.pointerType("grpc.csAttempt")]), $.methodSignature("before", [["c", /* @__PURE__ */ $.pointerType("grpc.callInfo")]], ["error"])],
		ForceCodecV2CallOption,
		() => [/* @__PURE__ */ $.structField("CodecV2", "encoding.CodecV2", [0], 0, true)]
	)
}

export class CustomCodecCallOption {
	public get Codec(): __goscript_codec.Codec | null {
		return this._fields.Codec
	}

	public set Codec(value: __goscript_codec.Codec | null) {
		this._fields.Codec = value
	}

	public _fields: {
		Codec: __goscript_codec.Codec | null
	}

	constructor(init?: Partial<{Codec?: __goscript_codec.Codec | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Codec: init?.Codec ?? (null! as __goscript_codec.Codec | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CustomCodecCallOption {
		return new CustomCodecCallOption(this, true)
	}

	public __goscriptAssign(source: CustomCodecCallOption): void {
		const target = this._fields
		const values = source._fields
		target.Codec = $.assignFieldValue(target.Codec, values.Codec, "grpc.Codec")
	}

	public after(_p0: callInfo | $.VarRef<callInfo> | null, _p1: __goscript_stream.csAttempt | $.VarRef<__goscript_stream.csAttempt> | null): void {
		const o = this;
	}

	public before(c: callInfo | $.VarRef<callInfo> | null): $.GoError {
		const o = this;
		$.pointerValue<callInfo>(c).codec = __goscript_codec.newCodecV0Bridge(o.Codec)
		return null
	}

	static __typeInfo = $.registerStructType(
		"grpc.CustomCodecCallOption",
		() => new CustomCodecCallOption(),
		() => [$.methodSignature("after", [/* @__PURE__ */ $.pointerType("grpc.callInfo"), /* @__PURE__ */ $.pointerType("grpc.csAttempt")]), $.methodSignature("before", [["c", /* @__PURE__ */ $.pointerType("grpc.callInfo")]], ["error"])],
		CustomCodecCallOption,
		() => [/* @__PURE__ */ $.structField("Codec", "grpc.Codec", [0], 0, true)]
	)
}

export class MaxRetryRPCBufferSizeCallOption {
	public get MaxRetryRPCBufferSize(): number {
		return this._fields.MaxRetryRPCBufferSize
	}

	public set MaxRetryRPCBufferSize(value: number) {
		this._fields.MaxRetryRPCBufferSize = value
	}

	public _fields: {
		MaxRetryRPCBufferSize: number
	}

	constructor(init?: Partial<{MaxRetryRPCBufferSize?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			MaxRetryRPCBufferSize: init?.MaxRetryRPCBufferSize ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): MaxRetryRPCBufferSizeCallOption {
		return new MaxRetryRPCBufferSizeCallOption(this, true)
	}

	public __goscriptAssign(source: MaxRetryRPCBufferSizeCallOption): void {
		const target = this._fields
		const values = source._fields
		target.MaxRetryRPCBufferSize = values.MaxRetryRPCBufferSize
	}

	public after(_p0: callInfo | $.VarRef<callInfo> | null, _p1: __goscript_stream.csAttempt | $.VarRef<__goscript_stream.csAttempt> | null): void {
		const o = this;
	}

	public before(c: callInfo | $.VarRef<callInfo> | null): $.GoError {
		const o = this;
		$.pointerValue<callInfo>(c).maxRetryRPCBufferSize = o.MaxRetryRPCBufferSize
		return null
	}

	static __typeInfo = $.registerStructType(
		"grpc.MaxRetryRPCBufferSizeCallOption",
		() => new MaxRetryRPCBufferSizeCallOption(),
		() => [$.methodSignature("after", [/* @__PURE__ */ $.pointerType("grpc.callInfo"), /* @__PURE__ */ $.pointerType("grpc.csAttempt")]), $.methodSignature("before", [["c", /* @__PURE__ */ $.pointerType("grpc.callInfo")]], ["error"])],
		MaxRetryRPCBufferSizeCallOption,
		() => [/* @__PURE__ */ $.structField("MaxRetryRPCBufferSize", /* @__PURE__ */ $.basicType("int"), [0], 0, true)]
	)
}

export class parser {
	// r is the underlying reader.
	// See the comment on recvMsg for the permissible
	// error types.
	public get r(): streamReader | null {
		return this._fields.r
	}

	public set r(value: streamReader | null) {
		this._fields.r = value
	}

	// The header of a gRPC message. Find more detail at
	// https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-HTTP2.md
	public get header(): Uint8Array {
		return this._fields.header
	}

	public set header(value: Uint8Array) {
		this._fields.header = value
	}

	// bufferPool is the pool of shared receive buffers.
	public get bufferPool(): mem.BufferPool | null {
		return this._fields.bufferPool
	}

	public set bufferPool(value: mem.BufferPool | null) {
		this._fields.bufferPool = value
	}

	public _fields: {
		r: streamReader | null
		header: Uint8Array
		bufferPool: mem.BufferPool | null
	}

	constructor(init?: Partial<{r?: streamReader | null, header?: Uint8Array, bufferPool?: mem.BufferPool | null}>, __goscriptValue?: boolean) {
		this._fields = {
			r: init?.r ?? (null! as streamReader | null),
			header: init?.header !== undefined ? $.cloneArrayValue(init.header, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 5)) : $.arrayValue(new Uint8Array(5)),
			bufferPool: init?.bufferPool ?? (null! as mem.BufferPool | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): parser {
		return new parser(this, true)
	}

	public __goscriptAssign(source: parser): void {
		const target = this._fields
		const values = source._fields
		target.r = $.assignFieldValue(target.r, values.r, "grpc.streamReader")
		target.header = $.assignFieldValue(target.header, values.header, /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 5))
		target.bufferPool = $.assignFieldValue(target.bufferPool, values.bufferPool, "mem.BufferPool")
	}

	public async recvMsg(maxReceiveMessageSize: number): globalThis.Promise<[payloadFormat, mem.BufferSlice, $.GoError]> {
		const p: parser | $.VarRef<parser> | null = this;
		const p$: parser = p == null ? $.pointerTarget<parser>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<parser>(p)
		let err = (__goscriptAwait = $.pointerValue<Exclude<streamReader, null>>((p$ as parser).r).ReadHeader($.goSlice((p$ as parser).header, undefined, undefined)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			return [0, (null as mem.BufferSlice), err]
		}

		let pf = $.uint($.arrayIndex((p$ as parser).header, 0), 8)
		let length = $.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint32($.goSlice((p$ as parser).header, 1, undefined))

		if (length == 0) {
			return [pf, (null as mem.BufferSlice), null]
		}
		if ($.int64(length) > 9223372036854775807n) {
			return [0, (null as mem.BufferSlice), await status.Errorf(8, "grpc: received message larger than max length allowed on current machine (%d vs. %d)", $.arrayToSlice<any>([$.basicInterfaceValue(length, "uint32"), $.basicInterfaceValue(9223372036854775807, "int")]))]
		}
		if ($.int(length) > maxReceiveMessageSize) {
			return [0, (null as mem.BufferSlice), await status.Errorf(8, "grpc: received message larger than max (%d vs. %d)", $.arrayToSlice<any>([$.basicInterfaceValue(length, "uint32"), $.basicInterfaceValue(maxReceiveMessageSize, "int")]))]
		}

		let __goscriptTuple4: any = await $.pointerValue<Exclude<streamReader, null>>((p$ as parser).r).Read($.int(length))
		let data: mem.BufferSlice = (__goscriptTuple4[0] as mem.BufferSlice)
		err = __goscriptTuple4[1]
		if (err != null) {
			if ($.comparableEqual(err, io.EOF)) {
				err = io.ErrUnexpectedEOF
			}
			return [0, (null as mem.BufferSlice), err]
		}
		return [pf, (data as mem.BufferSlice), null]
	}

	static __typeInfo = $.registerStructType(
		"grpc.parser",
		() => new parser(),
		() => [$.methodSignature("recvMsg", [["maxReceiveMessageSize", /* @__PURE__ */ $.basicType("int")]], [/* @__PURE__ */ $.basicType("uint8", "grpc.payloadFormat"), /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice"), "error"], true)],
		parser,
		() => [/* @__PURE__ */ $.structField("r", "grpc.streamReader", [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("header", /* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 5), [1], 16, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("bufferPool", "mem.BufferPool", [2], 24, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class payloadInfo {
	public get compressedLength(): number {
		return this._fields.compressedLength
	}

	public set compressedLength(value: number) {
		this._fields.compressedLength = value
	}

	public get uncompressedBytes(): mem.BufferSlice {
		return this._fields.uncompressedBytes
	}

	public set uncompressedBytes(value: mem.BufferSlice) {
		this._fields.uncompressedBytes = value
	}

	public _fields: {
		compressedLength: number
		uncompressedBytes: mem.BufferSlice
	}

	constructor(init?: Partial<{compressedLength?: number, uncompressedBytes?: mem.BufferSlice}>, __goscriptValue?: boolean) {
		this._fields = {
			compressedLength: init?.compressedLength ?? (0 as number),
			uncompressedBytes: init?.uncompressedBytes ?? (null! as mem.BufferSlice)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): payloadInfo {
		return new payloadInfo(this, true)
	}

	public __goscriptAssign(source: payloadInfo): void {
		const target = this._fields
		const values = source._fields
		target.compressedLength = values.compressedLength
		target.uncompressedBytes = values.uncompressedBytes
	}

	public async free(): globalThis.Promise<void> {
		const p: payloadInfo | $.VarRef<payloadInfo> | null = this;
		const p$: payloadInfo = p == null ? $.pointerTarget<payloadInfo>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<payloadInfo>(p)
		if ((p != null) && ((p$ as payloadInfo).uncompressedBytes != null)) {
			await mem.BufferSlice_Free((p$ as payloadInfo).uncompressedBytes)
		}
	}

	static __typeInfo = $.registerStructType(
		"grpc.payloadInfo",
		() => new payloadInfo(),
		() => [$.methodSignature("free", [], [], true)],
		payloadInfo,
		() => [/* @__PURE__ */ $.structField("compressedLength", /* @__PURE__ */ $.basicType("int"), [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("uncompressedBytes", /* @__PURE__ */ $.sliceType("mem.Buffer", "mem.BufferSlice"), [1], 8, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class rpcInfo {
	public get failfast(): boolean {
		return this._fields.failfast
	}

	public set failfast(value: boolean) {
		this._fields.failfast = value
	}

	public get preloaderInfo(): compressorInfo | $.VarRef<compressorInfo> | null {
		return this._fields.preloaderInfo
	}

	public set preloaderInfo(value: compressorInfo | $.VarRef<compressorInfo> | null) {
		this._fields.preloaderInfo = value
	}

	public _fields: {
		failfast: boolean
		preloaderInfo: compressorInfo | $.VarRef<compressorInfo> | null
	}

	constructor(init?: Partial<{failfast?: boolean, preloaderInfo?: compressorInfo | $.VarRef<compressorInfo> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			failfast: init?.failfast ?? (false as boolean),
			preloaderInfo: init?.preloaderInfo ?? (null! as compressorInfo | $.VarRef<compressorInfo> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): rpcInfo {
		return new rpcInfo(this, true)
	}

	public __goscriptAssign(source: rpcInfo): void {
		const target = this._fields
		const values = source._fields
		target.failfast = values.failfast
		target.preloaderInfo = values.preloaderInfo
	}

	static __typeInfo = $.registerStructType(
		"grpc.rpcInfo",
		() => new rpcInfo(),
		() => [],
		rpcInfo,
		() => [/* @__PURE__ */ $.structField("failfast", /* @__PURE__ */ $.basicType("bool"), [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("preloaderInfo", /* @__PURE__ */ $.pointerType("grpc.compressorInfo"), [1], 8, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class compressorInfo {
	public get codec(): __goscript_codec.baseCodec | null {
		return this._fields.codec
	}

	public set codec(value: __goscript_codec.baseCodec | null) {
		this._fields.codec = value
	}

	public get cp(): Compressor | null {
		return this._fields.cp
	}

	public set cp(value: Compressor | null) {
		this._fields.cp = value
	}

	public get comp(): encoding.Compressor | null {
		return this._fields.comp
	}

	public set comp(value: encoding.Compressor | null) {
		this._fields.comp = value
	}

	public _fields: {
		codec: __goscript_codec.baseCodec | null
		cp: Compressor | null
		comp: encoding.Compressor | null
	}

	constructor(init?: Partial<{codec?: __goscript_codec.baseCodec | null, cp?: Compressor | null, comp?: encoding.Compressor | null}>, __goscriptValue?: boolean) {
		this._fields = {
			codec: init?.codec ?? (null! as __goscript_codec.baseCodec | null),
			cp: init?.cp ?? (null! as Compressor | null),
			comp: init?.comp ?? (null! as encoding.Compressor | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): compressorInfo {
		return new compressorInfo(this, true)
	}

	public __goscriptAssign(source: compressorInfo): void {
		const target = this._fields
		const values = source._fields
		target.codec = $.assignFieldValue(target.codec, values.codec, "grpc.baseCodec")
		target.cp = $.assignFieldValue(target.cp, values.cp, "grpc.Compressor")
		target.comp = $.assignFieldValue(target.comp, values.comp, "encoding.Compressor")
	}

	static __typeInfo = $.registerStructType(
		"grpc.compressorInfo",
		() => new compressorInfo(),
		() => [],
		compressorInfo,
		() => [/* @__PURE__ */ $.structField("codec", "grpc.baseCodec", [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("cp", "grpc.Compressor", [1], 16, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("comp", "encoding.Compressor", [2], 32, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class rpcInfoContextKey {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): rpcInfoContextKey {
		return new rpcInfoContextKey(this, true)
	}

	public __goscriptAssign(source: rpcInfoContextKey): void {
	}

	static __typeInfo = $.registerStructType(
		"grpc.rpcInfoContextKey",
		() => new rpcInfoContextKey(),
		() => [],
		rpcInfoContextKey,
		() => []
	)
}

export const compressionNone: payloadFormat = 0

export const compressionMade: payloadFormat = 1

export const payloadLen: number = 1

export const sizeLen: number = 4

export const headerLen: number = 5

export const SupportPackageIsVersion3: boolean = true

export const SupportPackageIsVersion4: boolean = true

export const SupportPackageIsVersion5: boolean = true

export const SupportPackageIsVersion6: boolean = true

export const SupportPackageIsVersion7: boolean = true

export const SupportPackageIsVersion8: boolean = true

export const SupportPackageIsVersion9: boolean = true

export const grpcUA: string = "grpc-go/1.67.3"

export function NewGZIPCompressor(): Compressor | null {
	let [c, ] = NewGZIPCompressorWithLevel(-1)
	return c
}

export function NewGZIPCompressorWithLevel(level: number): [Compressor | null, $.GoError] {
	if ((level < -1) || (level > 9)) {
		return [null, fmt.Errorf("grpc: invalid compression level: %d", $.basicInterfaceValue(level, "int"))]
	}
	return [$.interfaceValue<Compressor | null>(new gzipCompressor({pool: $.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
		let __goscriptTuple0: any = gzip.NewWriterLevel($.pointerValueOrNil(io.Discard)!, level)
		let w: gzip.Writer | $.VarRef<gzip.Writer> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			$.panic((err as any))
		}
		return $.interfaceValue(w, "*gzip.Writer", /* @__PURE__ */ $.pointerType("gzip.Writer"))
	}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))}))}), "*grpc.gzipCompressor", /* @__PURE__ */ $.pointerType("grpc.gzipCompressor")), null]
}

export function NewGZIPDecompressor(): Decompressor | null {
	return $.interfaceValue<Decompressor | null>(new gzipDecompressor(), "*grpc.gzipDecompressor", /* @__PURE__ */ $.pointerType("grpc.gzipDecompressor"))
}

export function defaultCallInfo(): callInfo | $.VarRef<callInfo> | null {
	return new callInfo({failFast: true, maxRetryRPCBufferSize: 262144})
}

export function StaticMethod(): CallOption | null {
	return $.interfaceValue<CallOption | null>(new StaticMethodCallOption(undefined, true), "grpc.StaticMethodCallOption", "grpc.StaticMethodCallOption")
}

export function Header(md: $.VarRef<metadata.MD> | null): CallOption | null {
	return $.interfaceValue<CallOption | null>(new HeaderCallOption({HeaderAddr: md}, true), "grpc.HeaderCallOption", "grpc.HeaderCallOption")
}

export function Trailer(md: $.VarRef<metadata.MD> | null): CallOption | null {
	return $.interfaceValue<CallOption | null>(new TrailerCallOption({TrailerAddr: md}, true), "grpc.TrailerCallOption", "grpc.TrailerCallOption")
}

export function Peer(p: peer.Peer | $.VarRef<peer.Peer> | null): CallOption | null {
	return $.interfaceValue<CallOption | null>(new PeerCallOption({PeerAddr: p}, true), "grpc.PeerCallOption", "grpc.PeerCallOption")
}

export function WaitForReady(waitForReady: boolean): CallOption | null {
	return $.interfaceValue<CallOption | null>(new FailFastCallOption({FailFast: !waitForReady}, true), "grpc.FailFastCallOption", "grpc.FailFastCallOption")
}

export function FailFast(failFast: boolean): CallOption | null {
	return $.interfaceValue<CallOption | null>(new FailFastCallOption({FailFast: failFast}, true), "grpc.FailFastCallOption", "grpc.FailFastCallOption")
}

export function OnFinish(onFinish: ((err: $.GoError) => void) | null): CallOption | null {
	return $.interfaceValue<CallOption | null>(new OnFinishCallOption({OnFinish: onFinish}, true), "grpc.OnFinishCallOption", "grpc.OnFinishCallOption")
}

export function MaxCallRecvMsgSize(bytes: number): CallOption | null {
	return $.interfaceValue<CallOption | null>(new MaxRecvMsgSizeCallOption({MaxRecvMsgSize: bytes}, true), "grpc.MaxRecvMsgSizeCallOption", "grpc.MaxRecvMsgSizeCallOption")
}

export function MaxCallSendMsgSize(bytes: number): CallOption | null {
	return $.interfaceValue<CallOption | null>(new MaxSendMsgSizeCallOption({MaxSendMsgSize: bytes}, true), "grpc.MaxSendMsgSizeCallOption", "grpc.MaxSendMsgSizeCallOption")
}

export function PerRPCCredentials(creds: credentials.PerRPCCredentials | null): CallOption | null {
	return $.interfaceValue<CallOption | null>(new PerRPCCredsCallOption({Creds: creds}, true), "grpc.PerRPCCredsCallOption", "grpc.PerRPCCredsCallOption")
}

export function UseCompressor(name: string): CallOption | null {
	return $.interfaceValue<CallOption | null>(new CompressorCallOption({CompressorType: name}, true), "grpc.CompressorCallOption", "grpc.CompressorCallOption")
}

export function CallContentSubtype(contentSubtype: string): CallOption | null {
	return $.interfaceValue<CallOption | null>((() => { const __goscriptLiteralField0 = strings.ToLower(contentSubtype); return new ContentSubtypeCallOption({ContentSubtype: __goscriptLiteralField0}, true) })(), "grpc.ContentSubtypeCallOption", "grpc.ContentSubtypeCallOption")
}

export function ForceCodec(codec: encoding.Codec | null): CallOption | null {
	return $.interfaceValue<CallOption | null>(new ForceCodecCallOption({Codec: codec}, true), "grpc.ForceCodecCallOption", "grpc.ForceCodecCallOption")
}

export function ForceCodecV2(codec: encoding.CodecV2 | null): CallOption | null {
	return $.interfaceValue<CallOption | null>(new ForceCodecV2CallOption({CodecV2: codec}, true), "grpc.ForceCodecV2CallOption", "grpc.ForceCodecV2CallOption")
}

export function CallCustomCodec(codec: __goscript_codec.Codec | null): CallOption | null {
	return $.interfaceValue<CallOption | null>(new CustomCodecCallOption({Codec: codec}, true), "grpc.CustomCodecCallOption", "grpc.CustomCodecCallOption")
}

export function MaxRetryRPCBufferSize(bytes: number): CallOption | null {
	return $.interfaceValue<CallOption | null>(new MaxRetryRPCBufferSizeCallOption({MaxRetryRPCBufferSize: bytes}, true), "grpc.MaxRetryRPCBufferSizeCallOption", "grpc.MaxRetryRPCBufferSizeCallOption")
}

export function payloadFormat_isCompressed(pf: payloadFormat): boolean {
	return pf == 1
}

export async function encode(c: __goscript_codec.baseCodec | null, msg: any): globalThis.Promise<[mem.BufferSlice, $.GoError]> {
	if (msg == null) {
		return [(null as mem.BufferSlice), null]
	}
	let __goscriptTuple5: any = await (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_codec.baseCodec, null>) : $.pointerValue<Exclude<__goscript_codec.baseCodec, null>>(c)).Marshal(msg)
	let b: mem.BufferSlice = (__goscriptTuple5[0] as mem.BufferSlice)
	let err = __goscriptTuple5[1]
	if (err != null) {
		return [(null as mem.BufferSlice), await status.Errorf(13, "grpc: error while marshaling: %v", $.arrayToSlice<any>([(__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]))]
	}
	if ($.uint(mem.BufferSlice_Len(b), 64) > 4294967295) {
		await mem.BufferSlice_Free(b)
		return [(null as mem.BufferSlice), await status.Errorf(8, "grpc: message too large (%d bytes)", $.arrayToSlice<any>([$.basicInterfaceValue($.sliceLen((b as mem.BufferSlice)), "int")]))]
	}
	return [(b as mem.BufferSlice), null]
}

export async function compress(_in: mem.BufferSlice, cp: Compressor | null, compressor: encoding.Compressor | null, pool: mem.BufferPool | null): globalThis.Promise<[mem.BufferSlice, payloadFormat, $.GoError]> {
	await using __defer = new $.AsyncDisposableStack()
	if (((compressor == null) && (cp == null)) || (mem.BufferSlice_Len(_in) == 0)) {
		return [(null as mem.BufferSlice), 0, null]
	}
	let out: $.VarRef<mem.BufferSlice> = $.varRef(null! as mem.BufferSlice)
	let w = mem.NewWriter(out, pool)
	let wrapErr: ((err: $.GoError) => $.GoError | globalThis.Promise<$.GoError>) | null = $.functionValue(async (err: $.GoError): globalThis.Promise<$.GoError> => {
		await mem.BufferSlice_Free(out.value)
		return status.Errorf(13, "grpc: error while compressing: %v", $.arrayToSlice<any>([(__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]))
	}, ({ kind: $.TypeKind.Function, params: ["error"], results: ["error"] } as $.FunctionTypeInfo))
	if (compressor != null) {
		let [z, err] = await (compressor !== null && (compressor as any).__isVarRef !== true && (compressor as any).__goValue === undefined ? (compressor as Exclude<encoding.Compressor, null>) : $.pointerValue<Exclude<encoding.Compressor, null>>(compressor)).Compress(w)
		if (err != null) {
			return [(null as mem.BufferSlice), 0, (__goscriptAwait = wrapErr!(err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]
		}
		for (let __goscriptRangeTarget0 = _in, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let b = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as mem.Buffer | null)
			{
				let [, __goscriptShadow0] = await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? (z as Exclude<io.WriteCloser, null>) : $.pointerValue<Exclude<io.WriteCloser, null>>(z)).Write(((__goscriptAwait = (b !== null && (b as any).__isVarRef !== true && (b as any).__goValue === undefined ? (b as Exclude<mem.Buffer, null>) : $.pointerValue<Exclude<mem.Buffer, null>>(b)).ReadOnlyData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>))
				if (__goscriptShadow0 != null) {
					return [(null as mem.BufferSlice), 0, (__goscriptAwait = wrapErr!(__goscriptShadow0), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]
				}
			}
		}
		{
			let __goscriptShadow1 = await (z !== null && (z as any).__isVarRef !== true && (z as any).__goValue === undefined ? (z as Exclude<io.WriteCloser, null>) : $.pointerValue<Exclude<io.WriteCloser, null>>(z)).Close()
			if (__goscriptShadow1 != null) {
				return [(null as mem.BufferSlice), 0, (__goscriptAwait = wrapErr!(__goscriptShadow1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]
			}
		}
	} else {
		// This is obviously really inefficient since it fully materializes the data, but
		// there is no way around this with the old Compressor API. At least it attempts
		// to return the buffer to the provider, in the hopes it can be reused (maybe
		// even by a subsequent call to this very function).
		let buf = await mem.BufferSlice_MaterializeToBuffer(_in, pool)
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Free())((buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? (buf as Exclude<mem.Buffer, null>) : $.pointerValue<Exclude<mem.Buffer, null>>(buf))), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc/mem.Buffer.Free-fm")
		__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee1(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		{
			let err = (__goscriptAwait = (cp !== null && (cp as any).__isVarRef !== true && (cp as any).__goValue === undefined ? (cp as Exclude<Compressor, null>) : $.pointerValue<Exclude<Compressor, null>>(cp)).Do(w, ((__goscriptAwait = (buf !== null && (buf as any).__isVarRef !== true && (buf as any).__goValue === undefined ? (buf as Exclude<mem.Buffer, null>) : $.pointerValue<Exclude<mem.Buffer, null>>(buf)).ReadOnlyData(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return [(null as mem.BufferSlice), 0, (__goscriptAwait = wrapErr!(err), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]
			}
		}
	}
	return [(out.value as mem.BufferSlice), 1, null]
}

export function msgHeader(data: mem.BufferSlice, compData: mem.BufferSlice, pf: payloadFormat): [$.Slice<number>, mem.BufferSlice] {
	let hdr: $.Slice<number> = null! as $.Slice<number>
	let payload: mem.BufferSlice = null! as mem.BufferSlice
	hdr = $.makeSlice<number>(5, undefined, "byte")
	$.sliceElems(hdr!)[$.sliceSlot(hdr!, 0)] = $.uint(pf, 8)

	let length: number = 0
	if (payloadFormat_isCompressed(pf)) {
		length = $.uint(mem.BufferSlice_Len(compData), 32)
		payload = (compData as mem.BufferSlice)
	} else {
		length = $.uint(mem.BufferSlice_Len(data), 32)
		payload = (data as mem.BufferSlice)
	}

	// Write length of payload into buf
	$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint32($.goSlice(hdr, 1, undefined), length)
	return [hdr, (payload as mem.BufferSlice)]
}

export function outPayload(client: boolean, msg: any, dataLength: number, payloadLength: number, t: time.Time): stats.OutPayload | $.VarRef<stats.OutPayload> | null {
	return new stats.OutPayload({Client: client, Payload: msg, Length: dataLength, WireLength: payloadLength + 5, CompressedLength: payloadLength, SentTime: $.markAsStructValue($.cloneStructValue(t))})
}

export async function checkRecvPayload(pf: payloadFormat, recvCompress: string, haveCompressor: boolean, isServer: boolean): globalThis.Promise<status2.Status | $.VarRef<status2.Status> | null> {
	switch (pf) {
		case 0:
		{
			break
		}
		case 1:
		{
			if (($.stringEqual(recvCompress, "")) || ($.stringEqual(recvCompress, encoding.Identity))) {
				return status.New(13, "grpc: compressed flag set with identity or empty encoding")
			}
			if (!haveCompressor) {
				if (isServer) {
					return status.Newf(12, "grpc: Decompressor is not installed for grpc-encoding %q", $.arrayToSlice<any>([recvCompress]))
				} else {
					return status.Newf(13, "grpc: Decompressor is not installed for grpc-encoding %q", $.arrayToSlice<any>([recvCompress]))
				}
			}
			break
		}
		default:
		{
			return status.Newf(13, "grpc: received unexpected payload format %d", $.arrayToSlice<any>([$.namedValueInterfaceValue<any>(pf, "grpc.payloadFormat", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())]))
			break
		}
	}
	return null
}

export async function recvAndDecompress(p: parser | $.VarRef<parser> | null, s: transport.Stream | $.VarRef<transport.Stream> | null, dc: Decompressor | null, maxReceiveMessageSize: number, payInfo: payloadInfo | $.VarRef<payloadInfo> | null, compressor: encoding.Compressor | null, isServer: boolean): globalThis.Promise<[mem.BufferSlice, $.GoError]> {
	let out: mem.BufferSlice = null! as mem.BufferSlice
	let err: $.GoError = null! as $.GoError
	await using __defer = new $.AsyncDisposableStack()
	const payInfo$: payloadInfo = payInfo == null ? $.pointerTarget<payloadInfo>(payInfo) : (payInfo as any).__isVarRef === true ? (payInfo as any).value : (payInfo as any).__goValue === undefined ? (payInfo as any) : $.pointerTarget<payloadInfo>(payInfo)
	let __goscriptTuple6: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as parser).recvMsg(maxReceiveMessageSize) : parser.prototype.recvMsg.call(p, maxReceiveMessageSize))
	let pf = __goscriptTuple6[0]
	let compressed: mem.BufferSlice = (__goscriptTuple6[1] as mem.BufferSlice)
	err = __goscriptTuple6[2]
	if (err != null) {
		return [(null as mem.BufferSlice), err]
	}

	let compressedLength = mem.BufferSlice_Len(compressed)

	{
		let st: status2.Status | $.VarRef<status2.Status> | null = await checkRecvPayload(pf, await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as transport.Stream).RecvCompress() : transport.Stream.prototype.RecvCompress.call(s)), (compressor != null) || (dc != null), isServer)
		if (st != null) {
			await mem.BufferSlice_Free(compressed)
			return [(null as mem.BufferSlice), (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as status2.Status).Err() : status2.Status.prototype.Err.call(st))]
		}
	}

	let size: number = 0
	if (payloadFormat_isCompressed(pf)) {
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => mem.BufferSlice_Free(__receiver))(compressed), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc/mem.BufferSlice.Free-fm")
		__defer.defer(async () => { await __goscriptDeferCallee2() })

		// To match legacy behavior, if the decompressor is set by WithDecompressor or RPCDecompressor,
		// use this decompressor as the default.
		if (dc != null) {
			let uncompressedBuf: $.VarRef<$.Slice<number>> = $.varRef(null! as $.Slice<number>)
			let __goscriptTuple7: any = await (dc !== null && (dc as any).__isVarRef !== true && (dc as any).__goValue === undefined ? (dc as Exclude<Decompressor, null>) : $.pointerValue<Exclude<Decompressor, null>>(dc)).Do((mem.BufferSlice_Reader(compressed) as io.Reader | null))
			uncompressedBuf.value = __goscriptTuple7[0]
			err = __goscriptTuple7[1]
			if (err == null) {
				out = ($.arrayToSlice<mem.Buffer | null>([await mem.NewBuffer(uncompressedBuf, null)]) as mem.BufferSlice)
			}
			size = $.sliceLen(uncompressedBuf.value)
		} else {
			let __goscriptTuple8: any = await decompress(compressor, (compressed as mem.BufferSlice), maxReceiveMessageSize, $.pointerValue<parser>(p).bufferPool)
			out = (__goscriptTuple8[0] as mem.BufferSlice)
			size = __goscriptTuple8[1]
			err = __goscriptTuple8[2]
		}
		if (err != null) {
			const __goscriptReturn1: [mem.BufferSlice, $.GoError] = [(null as mem.BufferSlice), await status.Errorf(13, "grpc: failed to decompress the received message: %v", $.arrayToSlice<any>([(err as any)]))]
			out = __goscriptReturn1[0]
			err = __goscriptReturn1[1]
			await __defer.dispose()
			return [out, err]
		}
		if (size > maxReceiveMessageSize) {
			await mem.BufferSlice_Free(out)
			// TODO: Revisit the error code. Currently keep it consistent with java
			// implementation.
			const __goscriptReturn2: [mem.BufferSlice, $.GoError] = [(null as mem.BufferSlice), await status.Errorf(8, "grpc: received message after decompression larger than max (%d vs. %d)", $.arrayToSlice<any>([$.basicInterfaceValue(size, "int"), $.basicInterfaceValue(maxReceiveMessageSize, "int")]))]
			out = __goscriptReturn2[0]
			err = __goscriptReturn2[1]
			await __defer.dispose()
			return [out, err]
		}
	} else {
		out = (compressed as mem.BufferSlice)
	}

	if (payInfo != null) {
		;(payInfo$ as payloadInfo).compressedLength = compressedLength
		mem.BufferSlice_Ref(out);
		;(payInfo$ as payloadInfo).uncompressedBytes = (out as mem.BufferSlice)
	}

	const __goscriptReturn3: [mem.BufferSlice, $.GoError] = [(out as mem.BufferSlice), null]
	out = __goscriptReturn3[0]
	err = __goscriptReturn3[1]
	await __defer.dispose()
	return [out, err]
	throw new globalThis.Error("goscript: unreachable return")
}

export async function decompress(compressor: encoding.Compressor | null, d: mem.BufferSlice, maxReceiveMessageSize: number, pool: mem.BufferPool | null): globalThis.Promise<[mem.BufferSlice, number, $.GoError]> {
	let [dcReader, err] = await (compressor !== null && (compressor as any).__isVarRef !== true && (compressor as any).__goValue === undefined ? (compressor as Exclude<encoding.Compressor, null>) : $.pointerValue<Exclude<encoding.Compressor, null>>(compressor)).Decompress((mem.BufferSlice_Reader(d) as io.Reader | null))
	if (err != null) {
		return [(null as mem.BufferSlice), 0, err]
	}

	// TODO: Can/should this still be preserved with the new BufferSlice API? Are
	//  there any actual benefits to allocating a single large buffer instead of
	//  multiple smaller ones?
	//if sizer, ok := compressor.(interface {
	//	DecompressedSize(compressedBytes []byte) int
	//}); ok {
	//	if size := sizer.DecompressedSize(d); size >= 0 {
	//		if size > maxReceiveMessageSize {
	//			return nil, size, nil
	//		}
	//		// size is used as an estimate to size the buffer, but we
	//		// will read more data if available.
	//		// +MinRead so ReadFrom will not reallocate if size is correct.
	//		//
	//		// TODO: If we ensure that the buffer size is the same as the DecompressedSize,
	//		// we can also utilize the recv buffer pool here.
	//		buf := bytes.NewBuffer(make([]byte, 0, size+bytes.MinRead))
	//		bytesRead, err := buf.ReadFrom(io.LimitReader(dcReader, int64(maxReceiveMessageSize)+1))
	//		return buf.Bytes(), int(bytesRead), err
	//	}
	//}

	let out: $.VarRef<mem.BufferSlice> = $.varRef(null! as mem.BufferSlice)
	let __goscriptTuple9: any = await io.Copy($.pointerValueOrNil(mem.NewWriter(out, pool))!, $.pointerValueOrNil(io.LimitReader($.pointerValueOrNil(dcReader)!, $.int64Add($.int64(maxReceiveMessageSize), 1n)))!)
	err = __goscriptTuple9[1]
	if (err != null) {
		await mem.BufferSlice_Free(out.value)
		return [(null as mem.BufferSlice), 0, err]
	}
	return [(out.value as mem.BufferSlice), mem.BufferSlice_Len(out.value), null]
}

export async function recv(p: parser | $.VarRef<parser> | null, c: __goscript_codec.baseCodec | null, s: transport.Stream | $.VarRef<transport.Stream> | null, dc: Decompressor | null, m: any, maxReceiveMessageSize: number, payInfo: payloadInfo | $.VarRef<payloadInfo> | null, compressor: encoding.Compressor | null, isServer: boolean): globalThis.Promise<$.GoError> {
	await using __defer = new $.AsyncDisposableStack()
	let __goscriptTuple10: any = await recvAndDecompress(p, s, dc, maxReceiveMessageSize, payInfo, compressor, isServer)
	let data: mem.BufferSlice = (__goscriptTuple10[0] as mem.BufferSlice)
	let err = __goscriptTuple10[1]
	if (err != null) {
		return err
	}

	// If the codec wants its own reference to the data, it can get it. Otherwise, always
	// free the buffers.
	const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => mem.BufferSlice_Free(__receiver))(data), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "google.golang.org/grpc/mem.BufferSlice.Free-fm")
	__defer.defer(async () => { await __goscriptDeferCallee3() })

	{
		let __goscriptShadow2 = (__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<__goscript_codec.baseCodec, null>) : $.pointerValue<Exclude<__goscript_codec.baseCodec, null>>(c)).Unmarshal((data as mem.BufferSlice), m), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (__goscriptShadow2 != null) {
			return await status.Errorf(13, "grpc: failed to unmarshal the received message: %v", $.arrayToSlice<any>([(__goscriptShadow2 as any)]))
		}
	}

	return null
}

export function newContextWithRPCInfo(ctx: context.Context | null, failfast: boolean, codec: __goscript_codec.baseCodec | null, cp: Compressor | null, comp: encoding.Compressor | null): context.Context | null {
	return context.WithValue($.pointerValueOrNil(ctx)!, $.interfaceValue(new rpcInfoContextKey(undefined, true), "grpc.rpcInfoContextKey", "grpc.rpcInfoContextKey"), $.interfaceValue(new rpcInfo({failfast: failfast, preloaderInfo: new compressorInfo({codec: codec, cp: cp, comp: comp})}), "*grpc.rpcInfo", /* @__PURE__ */ $.pointerType("grpc.rpcInfo")))
}

export async function rpcInfoFromContext(ctx: context.Context | null): globalThis.Promise<[rpcInfo | $.VarRef<rpcInfo> | null, boolean]> {
	let s: rpcInfo | $.VarRef<rpcInfo> | null = null! as rpcInfo | $.VarRef<rpcInfo> | null
	let ok: boolean = false
	let __goscriptTuple11: any = $.typeAssertTuple<rpcInfo | $.VarRef<rpcInfo> | null>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Value($.interfaceValue(new rpcInfoContextKey(undefined, true), "grpc.rpcInfoContextKey", "grpc.rpcInfoContextKey")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), /* @__PURE__ */ $.pointerType("grpc.rpcInfo"))
	s = __goscriptTuple11[0]
	ok = __goscriptTuple11[1]
	return [s, ok]
}

export async function Code(err: $.GoError): globalThis.Promise<codes.Code> {
	return status.Code(err)
}

export async function ErrorDesc(err: $.GoError): globalThis.Promise<string> {
	return status2.Status.prototype.Message.call(await status.Convert(err))
}

export async function Errorf(c: codes.Code, format: string, a: $.Slice<any>): globalThis.Promise<$.GoError> {
	return status.Errorf(c, format, a)
}

export let errContextCanceled: $.GoError = await status.Error(1, await $.pointerValue<Exclude<$.GoError, null>>(context.Canceled).Error())

export function __goscript_set_errContextCanceled(__goscriptValue: $.GoError): void {
	errContextCanceled = __goscriptValue
}

export let errContextDeadline: $.GoError = await status.Error(4, await $.pointerValue<Exclude<$.GoError, null>>(context.DeadlineExceeded).Error())

export function __goscript_set_errContextDeadline(__goscriptValue: $.GoError): void {
	errContextDeadline = __goscriptValue
}

export async function toRPCErr(err: $.GoError): globalThis.Promise<$.GoError> {
	{
		let __goscriptSwitch0 = err
		switch ((true as boolean)) {
			case $.comparableEqual(__goscriptSwitch0, null):
			case $.comparableEqual(__goscriptSwitch0, io.EOF):
			{
				return err
				break
			}
			case $.comparableEqual(__goscriptSwitch0, context.DeadlineExceeded):
			{
				return errContextDeadline
				break
			}
			case $.comparableEqual(__goscriptSwitch0, context.Canceled):
			{
				return errContextCanceled
				break
			}
			case $.comparableEqual(__goscriptSwitch0, io.ErrUnexpectedEOF):
			{
				return status.Error(13, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				break
			}
		}
	}

	{
		const __goscriptTypeSwitchValue = err
		switch (true) {
			case $.typeAssert<transport.ConnectionError>(__goscriptTypeSwitchValue, "transport.ConnectionError").ok:
				{
					let e: transport.ConnectionError = $.markAsStructValue($.cloneStructValue($.typeAssert<transport.ConnectionError>(__goscriptTypeSwitchValue, "transport.ConnectionError").value))
					return status.Error(14, e.Desc)
				}
				break
			case $.typeAssert<transport.NewStreamError | $.VarRef<transport.NewStreamError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.NewStreamError")).ok:
				{
					let e: transport.NewStreamError | $.VarRef<transport.NewStreamError> | null = $.typeAssert<transport.NewStreamError | $.VarRef<transport.NewStreamError> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("transport.NewStreamError")).value
					return toRPCErr($.pointerValue<transport.NewStreamError>(e).Err)
				}
				break
		}
	}

	{
		let [, ok] = await status.FromError(err)
		if (ok) {
			return err
		}
	}

	return status.Error(2, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
}

export async function setCallInfoCodec(c: callInfo | $.VarRef<callInfo> | null): globalThis.Promise<$.GoError> {
	const c$: callInfo = c == null ? $.pointerTarget<callInfo>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<callInfo>(c)
	if ((c$ as callInfo).codec != null) {
		// codec was already set by a CallOption; use it, but set the content
		// subtype if it is not set.
		if ($.stringEqual((c$ as callInfo).contentSubtype, "")) {
			// c.codec is a baseCodec to hide the difference between grpc.Codec and
			// encoding.Codec (Name vs. String method name).  We only support
			// setting content subtype from encoding.Codec to avoid a behavior
			// change with the deprecated version.
			{
				let [ec, ok] = $.typeAssertTuple<encoding.CodecV2 | null>((c$ as callInfo).codec, "encoding.CodecV2")
				if (ok) {
					;(c$ as callInfo).contentSubtype = strings.ToLower((__goscriptAwait = (ec !== null && (ec as any).__isVarRef !== true && (ec as any).__goValue === undefined ? (ec as Exclude<encoding.CodecV2, null>) : $.pointerValue<Exclude<encoding.CodecV2, null>>(ec)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
				}
			}
		}
		return null
	}

	if ($.stringEqual((c$ as callInfo).contentSubtype, "")) {
		// No codec specified in CallOptions; use proto by default.
		;(c$ as callInfo).codec = (await __goscript_codec.getCodec(proto.Name) as __goscript_codec.baseCodec | null)
		return null
	}

	// c.contentSubtype is already lowercased in CallContentSubtype
	;(c$ as callInfo).codec = (await __goscript_codec.getCodec((c$ as callInfo).contentSubtype) as __goscript_codec.baseCodec | null)
	if ((c$ as callInfo).codec == null) {
		return status.Errorf(13, "no codec registered for content-subtype %s", $.arrayToSlice<any>([(c$ as callInfo).contentSubtype]))
	}
	return null
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({isCompressed: (receiver: any, ...args: any[]) => (payloadFormat_isCompressed as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "grpc.payloadFormat"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("isCompressed", [], [/* @__PURE__ */ $.basicType("bool")])])
}

var __goscriptAwait: any
