// Generated file based on sink.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as binlogpb from "@goscript/google.golang.org/grpc/binarylog/grpc_binarylog_v1/index.js"

import * as proto from "@goscript/google.golang.org/protobuf/proto/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import type * as protoreflect from "@goscript/google.golang.org/protobuf/reflect/protoreflect/index.js"

import * as __goscript_binarylog from "./binarylog.gs.ts"
import "@goscript/bufio/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/google.golang.org/grpc/binarylog/grpc_binarylog_v1/index.js"
import "@goscript/google.golang.org/protobuf/proto/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "./binarylog.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/internal/binarylog", ["binarylog.Sink", "binarylog.noopSink", "binarylog.writerSink", "binarylog.bufferedSink"])

export type Sink = {
	Close(): $.GoError | globalThis.Promise<$.GoError>
	Write(_p0: binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null): $.GoError | globalThis.Promise<$.GoError>
}

$.registerInterfaceType(
	"binarylog.Sink",
	null,
	[$.methodSignature("Close", [], ["error"]), $.methodSignature("Write", [/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry")], ["error"])]
);

export class noopSink {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): noopSink {
		return new noopSink(this, true)
	}

	public __goscriptAssign(source: noopSink): void {
	}

	public Close(): $.GoError {
		const ns: noopSink | $.VarRef<noopSink> | null = this;
		return null
	}

	public Write(_p0: binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null): $.GoError {
		const ns: noopSink | $.VarRef<noopSink> | null = this;
		return null
	}

	static __typeInfo = $.registerStructType(
		"binarylog.noopSink",
		() => new noopSink(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Write", [/* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry")], ["error"], true)],
		noopSink,
		() => []
	)
}

export class writerSink {
	public get out(): io.Writer | null {
		return this._fields.out
	}

	public set out(value: io.Writer | null) {
		this._fields.out = value
	}

	public _fields: {
		out: io.Writer | null
	}

	constructor(init?: Partial<{out?: io.Writer | null}>, __goscriptValue?: boolean) {
		this._fields = {
			out: init?.out ?? (null! as io.Writer | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): writerSink {
		return new writerSink(this, true)
	}

	public __goscriptAssign(source: writerSink): void {
		const target = this._fields
		const values = source._fields
		target.out = $.assignFieldValue(target.out, values.out, "io.Writer")
	}

	public Close(): $.GoError {
		const ws: writerSink | $.VarRef<writerSink> | null = this;
		return null
	}

	public async Write(e: binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null): globalThis.Promise<$.GoError> {
		const ws: writerSink | $.VarRef<writerSink> | null = this;
		const ws$: writerSink = ws == null ? $.pointerTarget<writerSink>(ws) : (ws as any).__isVarRef === true ? (ws as any).value : (ws as any).__goValue === undefined ? (ws as any) : $.pointerTarget<writerSink>(ws)
		let __goscriptTuple0: any = await proto.Marshal($.interfaceValue<proto.Message | null>(e, "*grpc_binarylog_v1.GrpcLogEntry", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry")))
		let b: $.Slice<number> = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_binarylog.grpclogLogger).Errorf("binary logging: failed to marshal proto message: %v", $.arrayToSlice<any>([(err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return err
		}
		let hdr: $.Slice<number> = $.makeSlice<number>(4, undefined, "byte")
		$.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).PutUint32(hdr, $.uint($.sliceLen(b), 32))
		{
			let [, __goscriptShadow0] = await $.pointerValue<Exclude<io.Writer, null>>((ws$ as writerSink).out).Write(hdr)
			if (__goscriptShadow0 != null) {
				return __goscriptShadow0
			}
		}
		{
			let [, __goscriptShadow1] = await $.pointerValue<Exclude<io.Writer, null>>((ws$ as writerSink).out).Write(b)
			if (__goscriptShadow1 != null) {
				return __goscriptShadow1
			}
		}
		return null
	}

	static __typeInfo = $.registerStructType(
		"binarylog.writerSink",
		() => new writerSink(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Write", [["e", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry")]], ["error"], true)],
		writerSink,
		() => [/* @__PURE__ */ $.structField("out", "io.Writer", [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/binarylog" })]
	)
}

export class bufferedSink {
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get closer(): io.Closer | null {
		return this._fields.closer
	}

	public set closer(value: io.Closer | null) {
		this._fields.closer = value
	}

	public get out(): Sink | null {
		return this._fields.out
	}

	public set out(value: Sink | null) {
		this._fields.out = value
	}

	public get buf(): bufio.Writer | $.VarRef<bufio.Writer> | null {
		return this._fields.buf
	}

	public set buf(value: bufio.Writer | $.VarRef<bufio.Writer> | null) {
		this._fields.buf = value
	}

	public get flusherStarted(): boolean {
		return this._fields.flusherStarted
	}

	public set flusherStarted(value: boolean) {
		this._fields.flusherStarted = value
	}

	public get writeTicker(): time.Ticker | $.VarRef<time.Ticker> | null {
		return this._fields.writeTicker
	}

	public set writeTicker(value: time.Ticker | $.VarRef<time.Ticker> | null) {
		this._fields.writeTicker = value
	}

	public get done(): $.Channel<{}> | null {
		return this._fields.done
	}

	public set done(value: $.Channel<{}> | null) {
		this._fields.done = value
	}

	public _fields: {
		mu: sync.Mutex
		closer: io.Closer | null
		out: Sink | null
		buf: bufio.Writer | $.VarRef<bufio.Writer> | null
		flusherStarted: boolean
		writeTicker: time.Ticker | $.VarRef<time.Ticker> | null
		done: $.Channel<{}> | null
	}

	constructor(init?: Partial<{mu?: sync.Mutex, closer?: io.Closer | null, out?: Sink | null, buf?: bufio.Writer | $.VarRef<bufio.Writer> | null, flusherStarted?: boolean, writeTicker?: time.Ticker | $.VarRef<time.Ticker> | null, done?: $.Channel<{}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			closer: init?.closer ?? (null! as io.Closer | null),
			out: init?.out ?? (null! as Sink | null),
			buf: init?.buf ?? (null! as bufio.Writer | $.VarRef<bufio.Writer> | null),
			flusherStarted: init?.flusherStarted ?? (false as boolean),
			writeTicker: init?.writeTicker ?? (null! as time.Ticker | $.VarRef<time.Ticker> | null),
			done: init?.done ?? (null! as $.Channel<{}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): bufferedSink {
		return new bufferedSink(this, true)
	}

	public __goscriptAssign(source: bufferedSink): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.closer = $.assignFieldValue(target.closer, values.closer, "io.Closer")
		target.out = $.assignFieldValue(target.out, values.out, "binarylog.Sink")
		target.buf = values.buf
		target.flusherStarted = values.flusherStarted
		target.writeTicker = values.writeTicker
		target.done = values.done
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const fs: bufferedSink | $.VarRef<bufferedSink> | null = this;
		using __defer = new $.DisposableStack()
		const fs$: bufferedSink = fs == null ? $.pointerTarget<bufferedSink>(fs) : (fs as any).__isVarRef === true ? (fs as any).value : (fs as any).__goValue === undefined ? (fs as any) : $.pointerTarget<bufferedSink>(fs)
		await (fs$ as bufferedSink).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((fs$ as bufferedSink).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		if ((fs$ as bufferedSink).writeTicker != null) {
			time.Ticker.prototype.Stop.call($.pointerValue<time.Ticker>((fs$ as bufferedSink).writeTicker))
		}
		void (fs$ as bufferedSink).done!.close()
		{
			let err = await bufio.Writer.prototype.Flush.call((fs$ as bufferedSink).buf)
			if (err != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_binarylog.grpclogLogger).Warningf("failed to flush to Sink: %v", $.arrayToSlice<any>([(err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		{
			let err = await $.pointerValue<Exclude<io.Closer, null>>((fs$ as bufferedSink).closer).Close()
			if (err != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_binarylog.grpclogLogger).Warningf("failed to close the underlying WriterCloser: %v", $.arrayToSlice<any>([(err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<Sink, null>>((fs$ as bufferedSink).out).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_binarylog.grpclogLogger).Warningf("failed to close the Sink: %v", $.arrayToSlice<any>([(err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return null
	}

	public async Write(e: binlogpb.GrpcLogEntry | $.VarRef<binlogpb.GrpcLogEntry> | null): globalThis.Promise<$.GoError> {
		let fs: bufferedSink | $.VarRef<bufferedSink> | null = this;
		using __defer = new $.DisposableStack()
		const fs$: bufferedSink = fs == null ? $.pointerTarget<bufferedSink>(fs) : (fs as any).__isVarRef === true ? (fs as any).value : (fs as any).__goValue === undefined ? (fs as any) : $.pointerTarget<bufferedSink>(fs)
		await (fs$ as bufferedSink).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((fs$ as bufferedSink).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		if (!(fs$ as bufferedSink).flusherStarted) {
			// Start the write loop when Write is called.
			await (fs !== null && (fs as any).__isVarRef !== true && (fs as any).__goValue === undefined ? ((fs as any) as bufferedSink).startFlushGoroutine() : bufferedSink.prototype.startFlushGoroutine.call(fs));
			;(fs$ as bufferedSink).flusherStarted = true
		}
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<Sink, null>>((fs$ as bufferedSink).out).Write(e), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}
		return null
	}

	public async startFlushGoroutine(): globalThis.Promise<void> {
		let fs: bufferedSink | $.VarRef<bufferedSink> | null = this;
		const fs$: bufferedSink = fs == null ? $.pointerTarget<bufferedSink>(fs) : (fs as any).__isVarRef === true ? (fs as any).value : (fs as any).__goValue === undefined ? (fs as any) : $.pointerTarget<bufferedSink>(fs);
		;(fs$ as bufferedSink).writeTicker = time.NewTicker(60000000000n)
		queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
			while (true) {
				const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
					{
						id: 0,
						isSend: false,
						channel: (fs$ as bufferedSink).done,
						onSelected: async (__goscriptSelect0Result) => {
							return $.selectVoidReturn()
						}
					},
					{
						id: 1,
						isSend: false,
						channel: $.pointerValue<time.Ticker>((fs$ as bufferedSink).writeTicker).C,
					}
				], false)
				if (__goscriptSelect0HasReturn) {
					return __goscriptSelect0Value
				}
				await (fs$ as bufferedSink).mu.Lock()
				{
					let err = await bufio.Writer.prototype.Flush.call((fs$ as bufferedSink).buf)
					if (err != null) {
						void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_binarylog.grpclogLogger).Warningf("failed to flush to Sink: %v", $.arrayToSlice<any>([(err as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
				void (fs$ as bufferedSink).mu.Unlock()
			}
		})() })
	}

	static __typeInfo = $.registerStructType(
		"binarylog.bufferedSink",
		() => new bufferedSink(),
		() => [$.methodSignature("Close", [], ["error"], true), $.methodSignature("Write", [["e", /* @__PURE__ */ $.pointerType("grpc_binarylog_v1.GrpcLogEntry")]], ["error"], true), $.methodSignature("startFlushGoroutine", [], [], true)],
		bufferedSink,
		() => [/* @__PURE__ */ $.structField("mu", "sync.Mutex", [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/binarylog" }), /* @__PURE__ */ $.structField("closer", "io.Closer", [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/binarylog" }), /* @__PURE__ */ $.structField("out", "binarylog.Sink", [2], 24, false, { pkgPath: "google.golang.org/grpc/internal/binarylog" }), /* @__PURE__ */ $.structField("buf", /* @__PURE__ */ $.pointerType("bufio.Writer"), [3], 40, false, { pkgPath: "google.golang.org/grpc/internal/binarylog" }), /* @__PURE__ */ $.structField("flusherStarted", /* @__PURE__ */ $.basicType("bool"), [4], 48, false, { pkgPath: "google.golang.org/grpc/internal/binarylog" }), /* @__PURE__ */ $.structField("writeTicker", /* @__PURE__ */ $.pointerType("time.Ticker"), [5], 56, false, { pkgPath: "google.golang.org/grpc/internal/binarylog" }), /* @__PURE__ */ $.structField("done", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [6], 64, false, { pkgPath: "google.golang.org/grpc/internal/binarylog" })]
	)
}

export const bufFlushDuration: time.Duration = 60000000000n

export let DefaultSink: Sink | null = $.interfaceValue<Sink | null>(new noopSink(), "*binarylog.noopSink", /* @__PURE__ */ $.pointerType("binarylog.noopSink"))

export function __goscript_set_DefaultSink(__goscriptValue: Sink | null): void {
	DefaultSink = __goscriptValue
}

export function newWriterSink(w: io.Writer | null): Sink | null {
	return $.interfaceValue<Sink | null>(new writerSink({out: w}), "*binarylog.writerSink", /* @__PURE__ */ $.pointerType("binarylog.writerSink"))
}

export function NewBufferedSink(o: io.WriteCloser | null): Sink | null {
	let bufW: bufio.Writer | $.VarRef<bufio.Writer> | null = bufio.NewWriter((o as io.Writer | null))
	return $.interfaceValue<Sink | null>((() => { const __goscriptLiteralField0 = newWriterSink($.interfaceValue<io.Writer | null>(bufW, "*bufio.Writer", /* @__PURE__ */ $.pointerType("bufio.Writer"))); return new bufferedSink({closer: (o as io.Closer | null), out: __goscriptLiteralField0, buf: bufW, done: $.makeChannel<{}>(0, {}, "both")}) })(), "*binarylog.bufferedSink", /* @__PURE__ */ $.pointerType("binarylog.bufferedSink"))
}

var __goscriptAwait: any
