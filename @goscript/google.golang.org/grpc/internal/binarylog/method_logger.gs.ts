// Generated file based on method_logger.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as net from "@goscript/net/index.js"

import * as strings from "@goscript/strings/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as binlogpb from "@goscript/google.golang.org/grpc/binarylog/grpc_binarylog_v1/index.js"

import * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as status from "@goscript/google.golang.org/grpc/status/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as durationpb from "@goscript/google.golang.org/protobuf/types/known/durationpb/index.js"

import * as timestamppb from "@goscript/google.golang.org/protobuf/types/known/timestamppb/index.js"

import * as status2 from "@goscript/google.golang.org/genproto/googleapis/rpc/status/index.js"

import type * as codes from "@goscript/google.golang.org/grpc/codes/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as status3 from "@goscript/google.golang.org/grpc/internal/status/index.js"

import * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import type * as anypb from "@goscript/google.golang.org/protobuf/types/known/anypb/index.js"

import * as __goscript_binarylog from "./binarylog.gs.ts"

import * as __goscript_env_config from "./env_config.gs.ts"

import * as __goscript_sink from "./sink.gs.ts"
import "@goscript/context/index.js"
import "@goscript/net/index.js"
import "@goscript/strings/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/grpc/binarylog/grpc_binarylog_v1/index.js"
import "@goscript/google.golang.org/grpc/metadata/index.js"
import "@goscript/google.golang.org/grpc/status/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/protobuf/types/known/durationpb/index.js"
import "@goscript/google.golang.org/protobuf/types/known/timestamppb/index.js"
import "@goscript/google.golang.org/genproto/googleapis/rpc/status/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/status/index.js"
import "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"
import "./binarylog.gs.ts"
import "./env_config.gs.ts"
import "./sink.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/internal/binarylog", ["binarylog.callIDGenerator", "binarylog.MethodLogger", "binarylog.TruncatingMethodLogger", "binarylog.LogEntryConfig", "binarylog.ClientHeader", "binarylog.ServerHeader", "binarylog.ClientMessage", "binarylog.ServerMessage", "binarylog.ClientHalfClose", "binarylog.ServerTrailer", "binarylog.Cancel"])

export type MethodLogger = {
	Log(_p0: context.Context | null, _p1: LogEntryConfig | null): void
}

$.registerInterfaceType(
	"binarylog.MethodLogger",
	null,
	[$.methodSignature("Log", ["context.Context", "binarylog.LogEntryConfig"])]
);

export type LogEntryConfig = {
	toProto(): binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null | globalThis.Promise<binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null>
}

$.registerInterfaceType(
	"binarylog.LogEntryConfig",
	null,
	[$.methodSignature("toProto", [], [/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry")])]
);

export class callIDGenerator {
	public get id(): bigint {
		return this._fields.id
	}

	public set id(value: bigint) {
		this._fields.id = value
	}

	public _fields: {
		id: bigint
	}

	constructor(init?: Partial<{id?: bigint}>, __goscriptValue?: boolean) {
		this._fields = {
			id: init?.id ?? (0n as bigint)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): callIDGenerator {
		return new callIDGenerator(this, true)
	}

	public __goscriptAssign(source: callIDGenerator): void {
		const target = this._fields
		const values = source._fields
		target.id = values.id
	}

	public next(): bigint {
		const g: callIDGenerator | $.VarRef<callIDGenerator> | null = this;
		let id = atomic.AddUint64($.fieldRef($.pointerValue<callIDGenerator>(g)._fields, "id"), 1n)
		return id
	}

	public reset(): void {
		let g: callIDGenerator | $.VarRef<callIDGenerator> | null = this;
		$.pointerValue<callIDGenerator>(g).id = 0n
	}

	static __typeInfo = $.registerStructType(
		"binarylog.callIDGenerator",
		() => new callIDGenerator(),
		() => [$.methodSignature("next", [], [/* @__PURE__ */ $.basicType("uint64")], true), $.methodSignature("reset", [], [], true)],
		callIDGenerator,
		() => [/* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/binarylog" })]
	)
}

export class TruncatingMethodLogger {
	public get headerMaxLen(): bigint {
		return this._fields.headerMaxLen
	}

	public set headerMaxLen(value: bigint) {
		this._fields.headerMaxLen = value
	}

	public get messageMaxLen(): bigint {
		return this._fields.messageMaxLen
	}

	public set messageMaxLen(value: bigint) {
		this._fields.messageMaxLen = value
	}

	public get callID(): bigint {
		return this._fields.callID
	}

	public set callID(value: bigint) {
		this._fields.callID = value
	}

	public get idWithinCallGen(): callIDGenerator | $.VarRef<callIDGenerator> | null {
		return this._fields.idWithinCallGen
	}

	public set idWithinCallGen(value: callIDGenerator | $.VarRef<callIDGenerator> | null) {
		this._fields.idWithinCallGen = value
	}

	public get sink(): __goscript_sink.Sink | null {
		return this._fields.sink
	}

	public set sink(value: __goscript_sink.Sink | null) {
		this._fields.sink = value
	}

	public _fields: {
		headerMaxLen: bigint
		messageMaxLen: bigint
		callID: bigint
		idWithinCallGen: callIDGenerator | $.VarRef<callIDGenerator> | null
		sink: __goscript_sink.Sink | null
	}

	constructor(init?: Partial<{headerMaxLen?: bigint, messageMaxLen?: bigint, callID?: bigint, idWithinCallGen?: callIDGenerator | $.VarRef<callIDGenerator> | null, sink?: __goscript_sink.Sink | null}>, __goscriptValue?: boolean) {
		this._fields = {
			headerMaxLen: init?.headerMaxLen ?? (0n as bigint),
			messageMaxLen: init?.messageMaxLen ?? (0n as bigint),
			callID: init?.callID ?? (0n as bigint),
			idWithinCallGen: init?.idWithinCallGen ?? (null! as callIDGenerator | $.VarRef<callIDGenerator> | null),
			sink: init?.sink ?? (null! as __goscript_sink.Sink | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TruncatingMethodLogger {
		return new TruncatingMethodLogger(this, true)
	}

	public __goscriptAssign(source: TruncatingMethodLogger): void {
		const target = this._fields
		const values = source._fields
		target.headerMaxLen = values.headerMaxLen
		target.messageMaxLen = values.messageMaxLen
		target.callID = values.callID
		target.idWithinCallGen = values.idWithinCallGen
		target.sink = $.assignFieldValue(target.sink, values.sink, "binarylog.Sink")
	}

	public async Build(c: LogEntryConfig | null): globalThis.Promise<binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null> {
		const ml: TruncatingMethodLogger | $.VarRef<TruncatingMethodLogger> | null = this;
		const ml$: TruncatingMethodLogger = ml == null ? $.pointerTarget<TruncatingMethodLogger>(ml) : (ml as any).__isVarRef === true ? (ml as any).value : (ml as any).__goValue === undefined ? (ml as any) : $.pointerTarget<TruncatingMethodLogger>(ml)
		let m: binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null = ((__goscriptAwait = (c !== null && (c as any).__isVarRef !== true && (c as any).__goValue === undefined ? (c as Exclude<LogEntryConfig, null>) : $.pointerValue<Exclude<LogEntryConfig, null>>(c)).toProto(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null)
		let m$: binlogpb.GrpcLogEntry = m == null ? $.pointerTarget<binlogpb.GrpcLogEntry>(m) : (m as any).__isVarRef === true ? (m as any).value : (m as any).__goValue === undefined ? (m as any) : $.pointerTarget<binlogpb.GrpcLogEntry>(m)
		let timestamp: timestamppb.Timestamp | $.VarRef<timestamppb.Timestamp> | null = timestamppb.Now();
		;(m$ as binlogpb.GrpcLogEntry).Timestamp = timestamp;
		;(m$ as binlogpb.GrpcLogEntry).CallId = (ml$ as TruncatingMethodLogger).callID;
		;(m$ as binlogpb.GrpcLogEntry).SequenceIdWithinCall = callIDGenerator.prototype.next.call((ml$ as TruncatingMethodLogger).idWithinCallGen)

		{
			const __goscriptTypeSwitchValue = (m$ as binlogpb.GrpcLogEntry).Payload
			switch (true) {
				case $.typeAssert<binlogpb.GrpcLogEntry_ClientHeader | $.VarRef<binlogpb.GrpcLogEntry_ClientHeader> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry_ClientHeader")).ok:
					{
						let pay: binlogpb.GrpcLogEntry_ClientHeader | $.VarRef<binlogpb.GrpcLogEntry_ClientHeader> | null = $.typeAssert<binlogpb.GrpcLogEntry_ClientHeader | $.VarRef<binlogpb.GrpcLogEntry_ClientHeader> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry_ClientHeader")).value
						;(m$ as binlogpb.GrpcLogEntry).PayloadTruncated = (ml !== null && (ml as any).__isVarRef !== true && (ml as any).__goValue === undefined ? ((ml as any) as TruncatingMethodLogger).truncateMetadata(binlogpb.ClientHeader.prototype.GetMetadata.call($.pointerValue<binlogpb.GrpcLogEntry_ClientHeader>(pay).ClientHeader)) : TruncatingMethodLogger.prototype.truncateMetadata.call(ml, binlogpb.ClientHeader.prototype.GetMetadata.call($.pointerValue<binlogpb.GrpcLogEntry_ClientHeader>(pay).ClientHeader)))
					}
					break
				case $.typeAssert<binlogpb.GrpcLogEntry_ServerHeader | $.VarRef<binlogpb.GrpcLogEntry_ServerHeader> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry_ServerHeader")).ok:
					{
						let pay: binlogpb.GrpcLogEntry_ServerHeader | $.VarRef<binlogpb.GrpcLogEntry_ServerHeader> | null = $.typeAssert<binlogpb.GrpcLogEntry_ServerHeader | $.VarRef<binlogpb.GrpcLogEntry_ServerHeader> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry_ServerHeader")).value
						;(m$ as binlogpb.GrpcLogEntry).PayloadTruncated = (ml !== null && (ml as any).__isVarRef !== true && (ml as any).__goValue === undefined ? ((ml as any) as TruncatingMethodLogger).truncateMetadata(binlogpb.ServerHeader.prototype.GetMetadata.call($.pointerValue<binlogpb.GrpcLogEntry_ServerHeader>(pay).ServerHeader)) : TruncatingMethodLogger.prototype.truncateMetadata.call(ml, binlogpb.ServerHeader.prototype.GetMetadata.call($.pointerValue<binlogpb.GrpcLogEntry_ServerHeader>(pay).ServerHeader)))
					}
					break
				case $.typeAssert<binlogpb.GrpcLogEntry_Message | $.VarRef<binlogpb.GrpcLogEntry_Message> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry_Message")).ok:
					{
						let pay: binlogpb.GrpcLogEntry_Message | $.VarRef<binlogpb.GrpcLogEntry_Message> | null = $.typeAssert<binlogpb.GrpcLogEntry_Message | $.VarRef<binlogpb.GrpcLogEntry_Message> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry_Message")).value
						;(m$ as binlogpb.GrpcLogEntry).PayloadTruncated = (ml !== null && (ml as any).__isVarRef !== true && (ml as any).__goValue === undefined ? ((ml as any) as TruncatingMethodLogger).truncateMessage($.pointerValue<binlogpb.GrpcLogEntry_Message>(pay).Message) : TruncatingMethodLogger.prototype.truncateMessage.call(ml, $.pointerValue<binlogpb.GrpcLogEntry_Message>(pay).Message))
					}
					break
			}
		}
		return m
	}

	public async Log(_p0: context.Context | null, c: LogEntryConfig | null): globalThis.Promise<void> {
		const ml: TruncatingMethodLogger | $.VarRef<TruncatingMethodLogger> | null = this;
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_sink.Sink, null>>($.pointerValue<TruncatingMethodLogger>(ml).sink).Write(await (ml !== null && (ml as any).__isVarRef !== true && (ml as any).__goValue === undefined ? ((ml as any) as TruncatingMethodLogger).Build(c) : TruncatingMethodLogger.prototype.Build.call(ml, c))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public truncateMessage(msgPb: binlogpb.Message | $.VarRef<binlogpb.Message> | null): boolean {
		const ml: TruncatingMethodLogger | $.VarRef<TruncatingMethodLogger> | null = this;
		let truncated: boolean = false
		const ml$: TruncatingMethodLogger = ml == null ? $.pointerTarget<TruncatingMethodLogger>(ml) : (ml as any).__isVarRef === true ? (ml as any).value : (ml as any).__goValue === undefined ? (ml as any) : $.pointerTarget<TruncatingMethodLogger>(ml)
		const msgPb$: binlogpb.Message = msgPb == null ? $.pointerTarget<binlogpb.Message>(msgPb) : (msgPb as any).__isVarRef === true ? (msgPb as any).value : (msgPb as any).__goValue === undefined ? (msgPb as any) : $.pointerTarget<binlogpb.Message>(msgPb)
		if ((ml$ as TruncatingMethodLogger).messageMaxLen == 18446744073709551615n) {
			return false
		}
		if ((ml$ as TruncatingMethodLogger).messageMaxLen >= $.uint64($.sliceLen((msgPb$ as binlogpb.Message).Data))) {
			return false
		}
		;(msgPb$ as binlogpb.Message).Data = $.goSlice((msgPb$ as binlogpb.Message).Data, undefined, globalThis.Number((ml$ as TruncatingMethodLogger).messageMaxLen))
		return true
	}

	public truncateMetadata(mdPb: binlogpb.Metadata | $.VarRef<binlogpb.Metadata> | null): boolean {
		const ml: TruncatingMethodLogger | $.VarRef<TruncatingMethodLogger> | null = this;
		let truncated: boolean = false
		const ml$: TruncatingMethodLogger = ml == null ? $.pointerTarget<TruncatingMethodLogger>(ml) : (ml as any).__isVarRef === true ? (ml as any).value : (ml as any).__goValue === undefined ? (ml as any) : $.pointerTarget<TruncatingMethodLogger>(ml)
		const mdPb$: binlogpb.Metadata = mdPb == null ? $.pointerTarget<binlogpb.Metadata>(mdPb) : (mdPb as any).__isVarRef === true ? (mdPb as any).value : (mdPb as any).__goValue === undefined ? (mdPb as any) : $.pointerTarget<binlogpb.Metadata>(mdPb)
		if ((ml$ as TruncatingMethodLogger).headerMaxLen == 18446744073709551615n) {
			return false
		}
		let bytesLimit: bigint = (ml$ as TruncatingMethodLogger).headerMaxLen
		let index: number = 0
		// At the end of the loop, index will be the first entry where the total
		// size is greater than the limit:
		//
		// len(entry[:index]) <= ml.hdr && len(entry[:index+1]) > ml.hdr.
		for (; index < $.sliceLen((mdPb$ as binlogpb.Metadata).Entry); index++) {
			let entry: binlogpb.MetadataEntry | $.VarRef<binlogpb.MetadataEntry> | null = $.arrayIndex((mdPb$ as binlogpb.Metadata).Entry!, index)
			if ($.stringEqual($.pointerValue<binlogpb.MetadataEntry>(entry).Key, "grpc-trace-bin")) {
				// "grpc-trace-bin" is a special key. It's kept in the log entry,
				// but not counted towards the size limit.
				continue
			}
			let currentEntryLen = $.uint64Add($.uint64($.stringLen((entry !== null && (entry as any).__isVarRef !== true && (entry as any).__goValue === undefined ? ((entry as any) as binlogpb.MetadataEntry).GetKey() : binlogpb.MetadataEntry.prototype.GetKey.call(entry)))), $.uint64($.sliceLen((entry !== null && (entry as any).__isVarRef !== true && (entry as any).__goValue === undefined ? ((entry as any) as binlogpb.MetadataEntry).GetValue() : binlogpb.MetadataEntry.prototype.GetValue.call(entry)))))
			if (currentEntryLen > bytesLimit) {
				break
			}
			bytesLimit = $.uint64Sub(bytesLimit, currentEntryLen)
		}
		truncated = index < $.sliceLen((mdPb$ as binlogpb.Metadata).Entry);
		;(mdPb$ as binlogpb.Metadata).Entry = $.goSlice((mdPb$ as binlogpb.Metadata).Entry, undefined, index)
		return truncated
	}

	static __typeInfo = $.registerStructType(
		"binarylog.TruncatingMethodLogger",
		() => new TruncatingMethodLogger(),
		() => [$.methodSignature("Build", [["c", "binarylog.LogEntryConfig"]], [/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry")], true), $.methodSignature("Log", [["_", "context.Context"], ["c", "binarylog.LogEntryConfig"]], [], true), $.methodSignature("truncateMessage", [["msgPb", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Message")]], [["truncated", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("truncateMetadata", [["mdPb", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.Metadata")]], [["truncated", /* @__PURE__ */ $.basicType("bool")]], true)],
		TruncatingMethodLogger,
		() => [/* @__PURE__ */ $.structField("headerMaxLen", /* @__PURE__ */ $.basicType("uint64"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/binarylog" }), /* @__PURE__ */ $.structField("messageMaxLen", /* @__PURE__ */ $.basicType("uint64"), [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/binarylog" }), /* @__PURE__ */ $.structField("callID", /* @__PURE__ */ $.basicType("uint64"), [2], 16, false, { pkgPath: "google.golang.org/grpc/internal/binarylog" }), /* @__PURE__ */ $.structField("idWithinCallGen", /* @__PURE__ */ $.pointerType("binarylog.callIDGenerator"), [3], 24, false, { pkgPath: "google.golang.org/grpc/internal/binarylog" }), /* @__PURE__ */ $.structField("sink", "binarylog.Sink", [4], 32, false, { pkgPath: "google.golang.org/grpc/internal/binarylog" })]
	)
}

export class ClientHeader {
	public get OnClientSide(): boolean {
		return this._fields.OnClientSide
	}

	public set OnClientSide(value: boolean) {
		this._fields.OnClientSide = value
	}

	public get Header(): metadata.MD {
		return this._fields.Header
	}

	public set Header(value: metadata.MD) {
		this._fields.Header = value
	}

	public get MethodName(): string {
		return this._fields.MethodName
	}

	public set MethodName(value: string) {
		this._fields.MethodName = value
	}

	public get Authority(): string {
		return this._fields.Authority
	}

	public set Authority(value: string) {
		this._fields.Authority = value
	}

	public get Timeout(): time.Duration {
		return this._fields.Timeout
	}

	public set Timeout(value: time.Duration) {
		this._fields.Timeout = value
	}

	// PeerAddr is required only when it's on server side.
	public get PeerAddr(): net.Addr | null {
		return this._fields.PeerAddr
	}

	public set PeerAddr(value: net.Addr | null) {
		this._fields.PeerAddr = value
	}

	public _fields: {
		OnClientSide: boolean
		Header: metadata.MD
		MethodName: string
		Authority: string
		Timeout: time.Duration
		PeerAddr: net.Addr | null
	}

	constructor(init?: Partial<{OnClientSide?: boolean, Header?: metadata.MD, MethodName?: string, Authority?: string, Timeout?: time.Duration, PeerAddr?: net.Addr | null}>, __goscriptValue?: boolean) {
		this._fields = {
			OnClientSide: init?.OnClientSide ?? (false as boolean),
			Header: init?.Header ?? (null! as metadata.MD),
			MethodName: init?.MethodName ?? ("" as string),
			Authority: init?.Authority ?? ("" as string),
			Timeout: init?.Timeout ?? (0n as time.Duration),
			PeerAddr: init?.PeerAddr ?? (null! as net.Addr | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClientHeader {
		return new ClientHeader(this, true)
	}

	public __goscriptAssign(source: ClientHeader): void {
		const target = this._fields
		const values = source._fields
		target.OnClientSide = values.OnClientSide
		target.Header = values.Header
		target.MethodName = values.MethodName
		target.Authority = values.Authority
		target.Timeout = values.Timeout
		target.PeerAddr = $.assignFieldValue(target.PeerAddr, values.PeerAddr, "net.Addr")
	}

	public toProto(): binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null {
		const c: ClientHeader | $.VarRef<ClientHeader> | null = this;
		const c$: ClientHeader = c == null ? $.pointerTarget<ClientHeader>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ClientHeader>(c)
		// This function doesn't need to set all the fields (e.g. seq ID). The Log
		// function will set the fields when necessary.
		let clientHeader: binlogpb.ClientHeader | $.VarRef<binlogpb.ClientHeader> | null = (() => { const __goscriptLiteralField1 = mdToMetadataProto((c$ as ClientHeader).Header); return new binlogpb.ClientHeader({Metadata: __goscriptLiteralField1, MethodName: (c$ as ClientHeader).MethodName, Authority: (c$ as ClientHeader).Authority}) })()
		if ((c$ as ClientHeader).Timeout > 0n) {
			$.pointerValue<binlogpb.ClientHeader>(clientHeader).Timeout = durationpb.New((c$ as ClientHeader).Timeout)
		}
		let ret: binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null = new binlogpb.GrpcLogEntry({Type: 1, Payload: $.interfaceValue<binlogpb.isGrpcLogEntry_Payload | null>(new binlogpb.GrpcLogEntry_ClientHeader({ClientHeader: clientHeader}), "*grpc_binarylog_v1.GrpcLogEntry_ClientHeader", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry_ClientHeader"))})
		let ret$: binlogpb.GrpcLogEntry = ret == null ? $.pointerTarget<binlogpb.GrpcLogEntry>(ret) : (ret as any).__isVarRef === true ? (ret as any).value : (ret as any).__goValue === undefined ? (ret as any) : $.pointerTarget<binlogpb.GrpcLogEntry>(ret)
		if ((c$ as ClientHeader).OnClientSide) {
			;(ret$ as binlogpb.GrpcLogEntry).Logger = 1
		} else {
			;(ret$ as binlogpb.GrpcLogEntry).Logger = 2
		}
		if ((c$ as ClientHeader).PeerAddr != null) {
			;(ret$ as binlogpb.GrpcLogEntry).Peer = addrToProto((c$ as ClientHeader).PeerAddr)
		}
		return ret
	}

	static __typeInfo = $.registerStructType(
		"binarylog.ClientHeader",
		() => new ClientHeader(),
		() => [$.methodSignature("toProto", [], [/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry")], true)],
		ClientHeader,
		() => [/* @__PURE__ */ $.structField("OnClientSide", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("Header", "metadata.MD", [1], 8, true), /* @__PURE__ */ $.structField("MethodName", /* @__PURE__ */ $.basicType("string"), [2], 16, true), /* @__PURE__ */ $.structField("Authority", /* @__PURE__ */ $.basicType("string"), [3], 32, true), /* @__PURE__ */ $.structField("Timeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [4], 48, true), /* @__PURE__ */ $.structField("PeerAddr", "net.Addr", [5], 56, true)]
	)
}

export class ServerHeader {
	public get OnClientSide(): boolean {
		return this._fields.OnClientSide
	}

	public set OnClientSide(value: boolean) {
		this._fields.OnClientSide = value
	}

	public get Header(): metadata.MD {
		return this._fields.Header
	}

	public set Header(value: metadata.MD) {
		this._fields.Header = value
	}

	// PeerAddr is required only when it's on client side.
	public get PeerAddr(): net.Addr | null {
		return this._fields.PeerAddr
	}

	public set PeerAddr(value: net.Addr | null) {
		this._fields.PeerAddr = value
	}

	public _fields: {
		OnClientSide: boolean
		Header: metadata.MD
		PeerAddr: net.Addr | null
	}

	constructor(init?: Partial<{OnClientSide?: boolean, Header?: metadata.MD, PeerAddr?: net.Addr | null}>, __goscriptValue?: boolean) {
		this._fields = {
			OnClientSide: init?.OnClientSide ?? (false as boolean),
			Header: init?.Header ?? (null! as metadata.MD),
			PeerAddr: init?.PeerAddr ?? (null! as net.Addr | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ServerHeader {
		return new ServerHeader(this, true)
	}

	public __goscriptAssign(source: ServerHeader): void {
		const target = this._fields
		const values = source._fields
		target.OnClientSide = values.OnClientSide
		target.Header = values.Header
		target.PeerAddr = $.assignFieldValue(target.PeerAddr, values.PeerAddr, "net.Addr")
	}

	public toProto(): binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null {
		const c: ServerHeader | $.VarRef<ServerHeader> | null = this;
		const c$: ServerHeader = c == null ? $.pointerTarget<ServerHeader>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ServerHeader>(c)
		let ret: binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null = new binlogpb.GrpcLogEntry({Type: 2, Payload: $.interfaceValue<binlogpb.isGrpcLogEntry_Payload | null>(new binlogpb.GrpcLogEntry_ServerHeader({ServerHeader: (() => { const __goscriptLiteralField2 = mdToMetadataProto((c$ as ServerHeader).Header); return new binlogpb.ServerHeader({Metadata: __goscriptLiteralField2}) })()}), "*grpc_binarylog_v1.GrpcLogEntry_ServerHeader", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry_ServerHeader"))})
		let ret$: binlogpb.GrpcLogEntry = ret == null ? $.pointerTarget<binlogpb.GrpcLogEntry>(ret) : (ret as any).__isVarRef === true ? (ret as any).value : (ret as any).__goValue === undefined ? (ret as any) : $.pointerTarget<binlogpb.GrpcLogEntry>(ret)
		if ((c$ as ServerHeader).OnClientSide) {
			;(ret$ as binlogpb.GrpcLogEntry).Logger = 1
		} else {
			;(ret$ as binlogpb.GrpcLogEntry).Logger = 2
		}
		if ((c$ as ServerHeader).PeerAddr != null) {
			;(ret$ as binlogpb.GrpcLogEntry).Peer = addrToProto((c$ as ServerHeader).PeerAddr)
		}
		return ret
	}

	static __typeInfo = $.registerStructType(
		"binarylog.ServerHeader",
		() => new ServerHeader(),
		() => [$.methodSignature("toProto", [], [/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry")], true)],
		ServerHeader,
		() => [/* @__PURE__ */ $.structField("OnClientSide", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("Header", "metadata.MD", [1], 8, true), /* @__PURE__ */ $.structField("PeerAddr", "net.Addr", [2], 16, true)]
	)
}

export class ClientMessage {
	public get OnClientSide(): boolean {
		return this._fields.OnClientSide
	}

	public set OnClientSide(value: boolean) {
		this._fields.OnClientSide = value
	}

	// Message can be a proto.Message or []byte. Other messages formats are not
	// supported.
	public get Message(): any {
		return this._fields.Message
	}

	public set Message(value: any) {
		this._fields.Message = value
	}

	public _fields: {
		OnClientSide: boolean
		Message: any
	}

	constructor(init?: Partial<{OnClientSide?: boolean, Message?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			OnClientSide: init?.OnClientSide ?? (false as boolean),
			Message: init?.Message ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClientMessage {
		return new ClientMessage(this, true)
	}

	public __goscriptAssign(source: ClientMessage): void {
		const target = this._fields
		const values = source._fields
		target.OnClientSide = values.OnClientSide
		target.Message = $.assignFieldValue(target.Message, values.Message, { kind: $.TypeKind.Interface, methods: [] })
	}

	public async toProto(): globalThis.Promise<binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null> {
		const c: ClientMessage | $.VarRef<ClientMessage> | null = this;
		const c$: ClientMessage = c == null ? $.pointerTarget<ClientMessage>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ClientMessage>(c)
		let data: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		{
			let [m, ok] = $.typeAssertTuple<proto.Message | null>((c$ as ClientMessage).Message, "protoreflect.ProtoMessage")
			if (ok) {
				let __goscriptTuple0: any = await proto.Marshal(m)
				data = __goscriptTuple0[0]
				err = __goscriptTuple0[1]
				if (err != null) {
					void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_binarylog.grpclogLogger).Infof("binarylogging: failed to marshal proto message: %v", $.arrayToSlice<any>([(err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			} else {
				{
					let __goscriptTuple1: any = $.typeAssertTuple<$.Slice<number>>((c$ as ClientMessage).Message, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
					let b: $.Slice<number> = __goscriptTuple1[0]
					let __goscriptShadow0 = __goscriptTuple1[1]
					if (__goscriptShadow0) {
						data = b
					} else {
						void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_binarylog.grpclogLogger).Infof("binarylogging: message to log is neither proto.message nor []byte", null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
			}
		}
		let ret: binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null = new binlogpb.GrpcLogEntry({Type: 3, Payload: $.interfaceValue<binlogpb.isGrpcLogEntry_Payload | null>(new binlogpb.GrpcLogEntry_Message({Message: new binlogpb.Message({Length: $.uint($.sliceLen(data), 32), Data: data})}), "*grpc_binarylog_v1.GrpcLogEntry_Message", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry_Message"))})
		let ret$: binlogpb.GrpcLogEntry = ret == null ? $.pointerTarget<binlogpb.GrpcLogEntry>(ret) : (ret as any).__isVarRef === true ? (ret as any).value : (ret as any).__goValue === undefined ? (ret as any) : $.pointerTarget<binlogpb.GrpcLogEntry>(ret)
		if ((c$ as ClientMessage).OnClientSide) {
			;(ret$ as binlogpb.GrpcLogEntry).Logger = 1
		} else {
			;(ret$ as binlogpb.GrpcLogEntry).Logger = 2
		}
		return ret
	}

	static __typeInfo = $.registerStructType(
		"binarylog.ClientMessage",
		() => new ClientMessage(),
		() => [$.methodSignature("toProto", [], [/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry")], true)],
		ClientMessage,
		() => [/* @__PURE__ */ $.structField("OnClientSide", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("Message", { kind: $.TypeKind.Interface, methods: [] }, [1], 8, true)]
	)
}

export class ServerMessage {
	public get OnClientSide(): boolean {
		return this._fields.OnClientSide
	}

	public set OnClientSide(value: boolean) {
		this._fields.OnClientSide = value
	}

	// Message can be a proto.Message or []byte. Other messages formats are not
	// supported.
	public get Message(): any {
		return this._fields.Message
	}

	public set Message(value: any) {
		this._fields.Message = value
	}

	public _fields: {
		OnClientSide: boolean
		Message: any
	}

	constructor(init?: Partial<{OnClientSide?: boolean, Message?: any}>, __goscriptValue?: boolean) {
		this._fields = {
			OnClientSide: init?.OnClientSide ?? (false as boolean),
			Message: init?.Message ?? (null! as any)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ServerMessage {
		return new ServerMessage(this, true)
	}

	public __goscriptAssign(source: ServerMessage): void {
		const target = this._fields
		const values = source._fields
		target.OnClientSide = values.OnClientSide
		target.Message = $.assignFieldValue(target.Message, values.Message, { kind: $.TypeKind.Interface, methods: [] })
	}

	public async toProto(): globalThis.Promise<binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null> {
		const c: ServerMessage | $.VarRef<ServerMessage> | null = this;
		const c$: ServerMessage = c == null ? $.pointerTarget<ServerMessage>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ServerMessage>(c)
		let data: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		{
			let [m, ok] = $.typeAssertTuple<proto.Message | null>((c$ as ServerMessage).Message, "protoreflect.ProtoMessage")
			if (ok) {
				let __goscriptTuple2: any = await proto.Marshal(m)
				data = __goscriptTuple2[0]
				err = __goscriptTuple2[1]
				if (err != null) {
					void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_binarylog.grpclogLogger).Infof("binarylogging: failed to marshal proto message: %v", $.arrayToSlice<any>([(err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			} else {
				{
					let __goscriptTuple3: any = $.typeAssertTuple<$.Slice<number>>((c$ as ServerMessage).Message, /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))
					let b: $.Slice<number> = __goscriptTuple3[0]
					let __goscriptShadow1 = __goscriptTuple3[1]
					if (__goscriptShadow1) {
						data = b
					} else {
						void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_binarylog.grpclogLogger).Infof("binarylogging: message to log is neither proto.message nor []byte", null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
			}
		}
		let ret: binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null = new binlogpb.GrpcLogEntry({Type: 4, Payload: $.interfaceValue<binlogpb.isGrpcLogEntry_Payload | null>(new binlogpb.GrpcLogEntry_Message({Message: new binlogpb.Message({Length: $.uint($.sliceLen(data), 32), Data: data})}), "*grpc_binarylog_v1.GrpcLogEntry_Message", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry_Message"))})
		let ret$: binlogpb.GrpcLogEntry = ret == null ? $.pointerTarget<binlogpb.GrpcLogEntry>(ret) : (ret as any).__isVarRef === true ? (ret as any).value : (ret as any).__goValue === undefined ? (ret as any) : $.pointerTarget<binlogpb.GrpcLogEntry>(ret)
		if ((c$ as ServerMessage).OnClientSide) {
			;(ret$ as binlogpb.GrpcLogEntry).Logger = 1
		} else {
			;(ret$ as binlogpb.GrpcLogEntry).Logger = 2
		}
		return ret
	}

	static __typeInfo = $.registerStructType(
		"binarylog.ServerMessage",
		() => new ServerMessage(),
		() => [$.methodSignature("toProto", [], [/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry")], true)],
		ServerMessage,
		() => [/* @__PURE__ */ $.structField("OnClientSide", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("Message", { kind: $.TypeKind.Interface, methods: [] }, [1], 8, true)]
	)
}

export class ClientHalfClose {
	public get OnClientSide(): boolean {
		return this._fields.OnClientSide
	}

	public set OnClientSide(value: boolean) {
		this._fields.OnClientSide = value
	}

	public _fields: {
		OnClientSide: boolean
	}

	constructor(init?: Partial<{OnClientSide?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			OnClientSide: init?.OnClientSide ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ClientHalfClose {
		return new ClientHalfClose(this, true)
	}

	public __goscriptAssign(source: ClientHalfClose): void {
		const target = this._fields
		const values = source._fields
		target.OnClientSide = values.OnClientSide
	}

	public toProto(): binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null {
		const c: ClientHalfClose | $.VarRef<ClientHalfClose> | null = this;
		let ret: binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null = new binlogpb.GrpcLogEntry({Type: 5, Payload: null})
		let ret$: binlogpb.GrpcLogEntry = ret == null ? $.pointerTarget<binlogpb.GrpcLogEntry>(ret) : (ret as any).__isVarRef === true ? (ret as any).value : (ret as any).__goValue === undefined ? (ret as any) : $.pointerTarget<binlogpb.GrpcLogEntry>(ret)
		if ($.pointerValue<ClientHalfClose>(c).OnClientSide) {
			;(ret$ as binlogpb.GrpcLogEntry).Logger = 1
		} else {
			;(ret$ as binlogpb.GrpcLogEntry).Logger = 2
		}
		return ret
	}

	static __typeInfo = $.registerStructType(
		"binarylog.ClientHalfClose",
		() => new ClientHalfClose(),
		() => [$.methodSignature("toProto", [], [/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry")], true)],
		ClientHalfClose,
		() => [/* @__PURE__ */ $.structField("OnClientSide", /* @__PURE__ */ $.basicType("bool"), [0], 0, true)]
	)
}

export class ServerTrailer {
	public get OnClientSide(): boolean {
		return this._fields.OnClientSide
	}

	public set OnClientSide(value: boolean) {
		this._fields.OnClientSide = value
	}

	public get Trailer(): metadata.MD {
		return this._fields.Trailer
	}

	public set Trailer(value: metadata.MD) {
		this._fields.Trailer = value
	}

	// Err is the status error.
	public get Err(): $.GoError {
		return this._fields.Err
	}

	public set Err(value: $.GoError) {
		this._fields.Err = value
	}

	// PeerAddr is required only when it's on client side and the RPC is trailer
	// only.
	public get PeerAddr(): net.Addr | null {
		return this._fields.PeerAddr
	}

	public set PeerAddr(value: net.Addr | null) {
		this._fields.PeerAddr = value
	}

	public _fields: {
		OnClientSide: boolean
		Trailer: metadata.MD
		Err: $.GoError
		PeerAddr: net.Addr | null
	}

	constructor(init?: Partial<{OnClientSide?: boolean, Trailer?: metadata.MD, Err?: $.GoError, PeerAddr?: net.Addr | null}>, __goscriptValue?: boolean) {
		this._fields = {
			OnClientSide: init?.OnClientSide ?? (false as boolean),
			Trailer: init?.Trailer ?? (null! as metadata.MD),
			Err: init?.Err ?? (null! as $.GoError),
			PeerAddr: init?.PeerAddr ?? (null! as net.Addr | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): ServerTrailer {
		return new ServerTrailer(this, true)
	}

	public __goscriptAssign(source: ServerTrailer): void {
		const target = this._fields
		const values = source._fields
		target.OnClientSide = values.OnClientSide
		target.Trailer = values.Trailer
		target.Err = $.assignFieldValue(target.Err, values.Err, "error")
		target.PeerAddr = $.assignFieldValue(target.PeerAddr, values.PeerAddr, "net.Addr")
	}

	public async toProto(): globalThis.Promise<binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null> {
		const c: ServerTrailer | $.VarRef<ServerTrailer> | null = this;
		const c$: ServerTrailer = c == null ? $.pointerTarget<ServerTrailer>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<ServerTrailer>(c)
		let __goscriptTuple4: any = await status.FromError((c$ as ServerTrailer).Err)
		let st: status3.Status | $.VarRef<status3.Status> | null = __goscriptTuple4[0]
		let ok = __goscriptTuple4[1]
		if (!ok) {
			void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_binarylog.grpclogLogger).Info($.arrayToSlice<any>(["binarylogging: error in trailer is not a status error"])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		let detailsBytes: $.Slice<number> = null! as $.Slice<number>
		let err: $.GoError = null! as $.GoError
		let stProto: status2.Status | $.VarRef<status2.Status> | null = await (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as status3.Status).Proto() : status3.Status.prototype.Proto.call(st))
		if ((stProto != null) && ($.sliceLen($.pointerValue<status2.Status>(stProto).Details) != 0)) {
			let __goscriptTuple5: any = await proto.Marshal($.interfaceValue<proto.Message | null>(stProto, "*status.Status", /* @__PURE__ */ $.pointerType("status.Status")))
			detailsBytes = __goscriptTuple5[0]
			err = __goscriptTuple5[1]
			if (err != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_binarylog.grpclogLogger).Infof("binarylogging: failed to marshal status proto: %v", $.arrayToSlice<any>([(err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		let ret: binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null = new binlogpb.GrpcLogEntry({Type: 6, Payload: $.interfaceValue<binlogpb.isGrpcLogEntry_Payload | null>(new binlogpb.GrpcLogEntry_Trailer({Trailer: (() => { const __goscriptLiteralField3 = mdToMetadataProto((c$ as ServerTrailer).Trailer); const __goscriptLiteralField4 = $.uint((st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as status3.Status).Code() : status3.Status.prototype.Code.call(st)), 32); const __goscriptLiteralField5 = (st !== null && (st as any).__isVarRef !== true && (st as any).__goValue === undefined ? ((st as any) as status3.Status).Message() : status3.Status.prototype.Message.call(st)); return new binlogpb.Trailer({Metadata: __goscriptLiteralField3, StatusCode: __goscriptLiteralField4, StatusMessage: __goscriptLiteralField5, StatusDetails: detailsBytes}) })()}), "*grpc_binarylog_v1.GrpcLogEntry_Trailer", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry_Trailer"))})
		let ret$: binlogpb.GrpcLogEntry = ret == null ? $.pointerTarget<binlogpb.GrpcLogEntry>(ret) : (ret as any).__isVarRef === true ? (ret as any).value : (ret as any).__goValue === undefined ? (ret as any) : $.pointerTarget<binlogpb.GrpcLogEntry>(ret)
		if ((c$ as ServerTrailer).OnClientSide) {
			;(ret$ as binlogpb.GrpcLogEntry).Logger = 1
		} else {
			;(ret$ as binlogpb.GrpcLogEntry).Logger = 2
		}
		if ((c$ as ServerTrailer).PeerAddr != null) {
			;(ret$ as binlogpb.GrpcLogEntry).Peer = addrToProto((c$ as ServerTrailer).PeerAddr)
		}
		return ret
	}

	static __typeInfo = $.registerStructType(
		"binarylog.ServerTrailer",
		() => new ServerTrailer(),
		() => [$.methodSignature("toProto", [], [/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry")], true)],
		ServerTrailer,
		() => [/* @__PURE__ */ $.structField("OnClientSide", /* @__PURE__ */ $.basicType("bool"), [0], 0, true), /* @__PURE__ */ $.structField("Trailer", "metadata.MD", [1], 8, true), /* @__PURE__ */ $.structField("Err", "error", [2], 16, true), /* @__PURE__ */ $.structField("PeerAddr", "net.Addr", [3], 32, true)]
	)
}

export class Cancel {
	public get OnClientSide(): boolean {
		return this._fields.OnClientSide
	}

	public set OnClientSide(value: boolean) {
		this._fields.OnClientSide = value
	}

	public _fields: {
		OnClientSide: boolean
	}

	constructor(init?: Partial<{OnClientSide?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			OnClientSide: init?.OnClientSide ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Cancel {
		return new Cancel(this, true)
	}

	public __goscriptAssign(source: Cancel): void {
		const target = this._fields
		const values = source._fields
		target.OnClientSide = values.OnClientSide
	}

	public toProto(): binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null {
		const c: Cancel | $.VarRef<Cancel> | null = this;
		let ret: binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null = new binlogpb.GrpcLogEntry({Type: 7, Payload: null})
		let ret$: binlogpb.GrpcLogEntry = ret == null ? $.pointerTarget<binlogpb.GrpcLogEntry>(ret) : (ret as any).__isVarRef === true ? (ret as any).value : (ret as any).__goValue === undefined ? (ret as any) : $.pointerTarget<binlogpb.GrpcLogEntry>(ret)
		if ($.pointerValue<Cancel>(c).OnClientSide) {
			;(ret$ as binlogpb.GrpcLogEntry).Logger = 1
		} else {
			;(ret$ as binlogpb.GrpcLogEntry).Logger = 2
		}
		return ret
	}

	static __typeInfo = $.registerStructType(
		"binarylog.Cancel",
		() => new Cancel(),
		() => [$.methodSignature("toProto", [], [/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry")], true)],
		Cancel,
		() => [/* @__PURE__ */ $.structField("OnClientSide", /* @__PURE__ */ $.basicType("bool"), [0], 0, true)]
	)
}

export let idGen: $.VarRef<callIDGenerator> = $.varRef(new callIDGenerator(undefined, true))

export function __goscript_set_idGen(__goscriptValue: callIDGenerator): void {
	$.assignStruct(idGen.value, __goscriptValue)
}

export function NewTruncatingMethodLogger(h: bigint, m: bigint): TruncatingMethodLogger | $.VarRef<TruncatingMethodLogger> | null {
	return (() => { const __goscriptLiteralField0 = idGen.value.next(); return new TruncatingMethodLogger({headerMaxLen: h, messageMaxLen: m, callID: __goscriptLiteralField0, idWithinCallGen: new callIDGenerator(), sink: __goscript_sink.DefaultSink}) })()
}

export function metadataKeyOmit(key: string): boolean {
	switch (key) {
		case "lb-token":
		case ":path":
		case ":authority":
		case "content-encoding":
		case "content-type":
		case "user-agent":
		case "te":
		{
			return true
			break
		}
		case "grpc-trace-bin":
		{
			return false
			break
		}
	}
	return strings.HasPrefix(key, "grpc-")
}

export function mdToMetadataProto(md: metadata.MD): binlogpb.Metadata | $.VarRef<binlogpb.Metadata> | null {
	let ret: binlogpb.Metadata | $.VarRef<binlogpb.Metadata> | null = new binlogpb.Metadata()
	let ret$: binlogpb.Metadata = ret == null ? $.pointerTarget<binlogpb.Metadata>(ret) : (ret as any).__isVarRef === true ? (ret as any).value : (ret as any).__goValue === undefined ? (ret as any) : $.pointerTarget<binlogpb.Metadata>(ret)
	for (const [k, vv] of md?.entries() ?? []) {
		if (metadataKeyOmit(k)) {
			continue
		}
		for (let __goscriptRangeTarget0 = vv, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let v = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as string);
			;(ret$ as binlogpb.Metadata).Entry = $.appendOne((ret$ as binlogpb.Metadata).Entry, new binlogpb.MetadataEntry({Key: k, Value: $.stringToBytes(v)}), $.appendZeros.nil)
		}
	}
	return ret
}

export function addrToProto(addr: net.Addr | null): binlogpb.Address | $.VarRef<binlogpb.Address> | null {
	let ret: binlogpb.Address | $.VarRef<binlogpb.Address> | null = new binlogpb.Address()
	let ret$: binlogpb.Address = ret == null ? $.pointerTarget<binlogpb.Address>(ret) : (ret as any).__isVarRef === true ? (ret as any).value : (ret as any).__goValue === undefined ? (ret as any) : $.pointerTarget<binlogpb.Address>(ret)
	{
		const __goscriptTypeSwitchValue = addr
		switch (true) {
			case $.typeAssert<net.TCPAddr | $.VarRef<net.TCPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.TCPAddr")).ok:
				{
					let a: net.TCPAddr | $.VarRef<net.TCPAddr> | null = $.typeAssert<net.TCPAddr | $.VarRef<net.TCPAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.TCPAddr")).value
					if (net.IP_To4($.pointerValue<net.TCPAddr>(a).IP) != null) {
						;(ret$ as binlogpb.Address).Type = 1
					} else {
						if (net.IP_To16($.pointerValue<net.TCPAddr>(a).IP) != null) {
							;(ret$ as binlogpb.Address).Type = 2
						} else {
							;(ret$ as binlogpb.Address).Type = 0
							// Do not set address and port fields.
							break
						}
					}
					;(ret$ as binlogpb.Address).Address = net.IP_String($.pointerValue<net.TCPAddr>(a).IP);
					;(ret$ as binlogpb.Address).IpPort = $.uint($.pointerValue<net.TCPAddr>(a).Port, 32)
				}
				break
			case $.typeAssert<net.UnixAddr | $.VarRef<net.UnixAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UnixAddr")).ok:
				{
					let a: net.UnixAddr | $.VarRef<net.UnixAddr> | null = $.typeAssert<net.UnixAddr | $.VarRef<net.UnixAddr> | null>(__goscriptTypeSwitchValue, /* @__PURE__ */ $.pointerType("net.UnixAddr")).value
					;(ret$ as binlogpb.Address).Type = 3;
					;(ret$ as binlogpb.Address).Address = (a !== null && (a as any).__isVarRef !== true && (a as any).__goValue === undefined ? ((a as any) as net.UnixAddr).String() : net.UnixAddr.prototype.String.call(a))
				}
				break
			default:
				{
					let a: any = __goscriptTypeSwitchValue
					;(ret$ as binlogpb.Address).Type = 0
				}
				break
		}
	}
	return ret
}

var __goscriptAwait: any
