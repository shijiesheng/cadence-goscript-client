// Generated file based on simple_server.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as errors from "@goscript/errors/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as sync from "@goscript/sync/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as time from "@goscript/time/index.js"

import * as bufio from "@goscript/bufio/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as context from "@goscript/context/index.js"

import * as tls from "@goscript/crypto/tls/index.js"

import type * as __goscript__type from "./type.gs.ts"

import * as __goscript_application_exception from "./application_exception.gs.ts"

import * as __goscript_binary_protocol from "./binary_protocol.gs.ts"

import * as __goscript_configuration from "./configuration.gs.ts"

import * as __goscript_context from "./context.gs.ts"

import * as __goscript_exception from "./exception.gs.ts"

import * as __goscript_header_context from "./header_context.gs.ts"

import * as __goscript_header_protocol from "./header_protocol.gs.ts"

import * as __goscript_header_transport from "./header_transport.gs.ts"

import * as __goscript_logger from "./logger.gs.ts"

import type * as __goscript_messagetype from "./messagetype.gs.ts"

import * as __goscript_processor_factory from "./processor_factory.gs.ts"

import * as __goscript_protocol from "./protocol.gs.ts"

import * as __goscript_protocol_factory from "./protocol_factory.gs.ts"

import * as __goscript_response_helper from "./response_helper.gs.ts"

import * as __goscript_server_transport from "./server_transport.gs.ts"

import * as __goscript_transport from "./transport.gs.ts"

import * as __goscript_transport_exception from "./transport_exception.gs.ts"

import * as __goscript_transport_factory from "./transport_factory.gs.ts"
import "@goscript/errors/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/time/index.js"
import "@goscript/bufio/index.js"
import "@goscript/bytes/index.js"
import "@goscript/context/index.js"
import "@goscript/crypto/tls/index.js"
import "./application_exception.gs.ts"
import "./binary_protocol.gs.ts"
import "./configuration.gs.ts"
import "./context.gs.ts"
import "./exception.gs.ts"
import "./header_context.gs.ts"
import "./header_protocol.gs.ts"
import "./header_transport.gs.ts"
import "./logger.gs.ts"
import "./processor_factory.gs.ts"
import "./protocol.gs.ts"
import "./protocol_factory.gs.ts"
import "./response_helper.gs.ts"
import "./server_transport.gs.ts"
import "./transport.gs.ts"
import "./transport_exception.gs.ts"
import "./transport_factory.gs.ts"

$.registerTypePackagePath("github.com/apache/thrift/lib/go/thrift", ["thrift.TSimpleServer"])

export class TSimpleServer {
	public get closed(): number {
		return this._fields.closed
	}

	public set closed(value: number) {
		this._fields.closed = value
	}

	public get wg(): sync.WaitGroup {
		return this._fields.wg
	}

	public set wg(value: sync.WaitGroup) {
		this._fields.wg = value
	}

	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get processorFactory(): __goscript_processor_factory.TProcessorFactory | null {
		return this._fields.processorFactory
	}

	public set processorFactory(value: __goscript_processor_factory.TProcessorFactory | null) {
		this._fields.processorFactory = value
	}

	public get serverTransport(): __goscript_server_transport.TServerTransport | null {
		return this._fields.serverTransport
	}

	public set serverTransport(value: __goscript_server_transport.TServerTransport | null) {
		this._fields.serverTransport = value
	}

	public get inputTransportFactory(): __goscript_transport_factory.TTransportFactory | null {
		return this._fields.inputTransportFactory
	}

	public set inputTransportFactory(value: __goscript_transport_factory.TTransportFactory | null) {
		this._fields.inputTransportFactory = value
	}

	public get outputTransportFactory(): __goscript_transport_factory.TTransportFactory | null {
		return this._fields.outputTransportFactory
	}

	public set outputTransportFactory(value: __goscript_transport_factory.TTransportFactory | null) {
		this._fields.outputTransportFactory = value
	}

	public get inputProtocolFactory(): __goscript_protocol_factory.TProtocolFactory | null {
		return this._fields.inputProtocolFactory
	}

	public set inputProtocolFactory(value: __goscript_protocol_factory.TProtocolFactory | null) {
		this._fields.inputProtocolFactory = value
	}

	public get outputProtocolFactory(): __goscript_protocol_factory.TProtocolFactory | null {
		return this._fields.outputProtocolFactory
	}

	public set outputProtocolFactory(value: __goscript_protocol_factory.TProtocolFactory | null) {
		this._fields.outputProtocolFactory = value
	}

	// Headers to auto forward in THeaderProtocol
	public get forwardHeaders(): $.Slice<string> {
		return this._fields.forwardHeaders
	}

	public set forwardHeaders(value: $.Slice<string>) {
		this._fields.forwardHeaders = value
	}

	public get logger(): ((msg: string) => void) | null {
		return this._fields.logger
	}

	public set logger(value: ((msg: string) => void) | null) {
		this._fields.logger = value
	}

	public _fields: {
		closed: number
		wg: sync.WaitGroup
		mu: sync.Mutex
		processorFactory: __goscript_processor_factory.TProcessorFactory | null
		serverTransport: __goscript_server_transport.TServerTransport | null
		inputTransportFactory: __goscript_transport_factory.TTransportFactory | null
		outputTransportFactory: __goscript_transport_factory.TTransportFactory | null
		inputProtocolFactory: __goscript_protocol_factory.TProtocolFactory | null
		outputProtocolFactory: __goscript_protocol_factory.TProtocolFactory | null
		forwardHeaders: $.Slice<string>
		logger: ((msg: string) => void) | null
	}

	constructor(init?: Partial<{closed?: number, wg?: sync.WaitGroup, mu?: sync.Mutex, processorFactory?: __goscript_processor_factory.TProcessorFactory | null, serverTransport?: __goscript_server_transport.TServerTransport | null, inputTransportFactory?: __goscript_transport_factory.TTransportFactory | null, outputTransportFactory?: __goscript_transport_factory.TTransportFactory | null, inputProtocolFactory?: __goscript_protocol_factory.TProtocolFactory | null, outputProtocolFactory?: __goscript_protocol_factory.TProtocolFactory | null, forwardHeaders?: $.Slice<string>, logger?: ((msg: string) => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			closed: init?.closed ?? (0 as number),
			wg: init?.wg ? $.markAsStructValue($.cloneStructValue(init.wg)) : $.markAsStructValue(new sync.WaitGroup()),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			processorFactory: init?.processorFactory ?? (null! as __goscript_processor_factory.TProcessorFactory | null),
			serverTransport: init?.serverTransport ?? (null! as __goscript_server_transport.TServerTransport | null),
			inputTransportFactory: init?.inputTransportFactory ?? (null! as __goscript_transport_factory.TTransportFactory | null),
			outputTransportFactory: init?.outputTransportFactory ?? (null! as __goscript_transport_factory.TTransportFactory | null),
			inputProtocolFactory: init?.inputProtocolFactory ?? (null! as __goscript_protocol_factory.TProtocolFactory | null),
			outputProtocolFactory: init?.outputProtocolFactory ?? (null! as __goscript_protocol_factory.TProtocolFactory | null),
			forwardHeaders: init?.forwardHeaders ?? (null! as $.Slice<string>),
			logger: init?.logger ?? (null! as ((msg: string) => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): TSimpleServer {
		return new TSimpleServer(this, true)
	}

	public __goscriptAssign(source: TSimpleServer): void {
		const target = this._fields
		const values = source._fields
		target.closed = values.closed
		$.assignStruct(target.wg, values.wg)
		$.assignStruct(target.mu, values.mu)
		target.processorFactory = $.assignFieldValue(target.processorFactory, values.processorFactory, "thrift.TProcessorFactory")
		target.serverTransport = $.assignFieldValue(target.serverTransport, values.serverTransport, "thrift.TServerTransport")
		target.inputTransportFactory = $.assignFieldValue(target.inputTransportFactory, values.inputTransportFactory, "thrift.TTransportFactory")
		target.outputTransportFactory = $.assignFieldValue(target.outputTransportFactory, values.outputTransportFactory, "thrift.TTransportFactory")
		target.inputProtocolFactory = $.assignFieldValue(target.inputProtocolFactory, values.inputProtocolFactory, "thrift.TProtocolFactory")
		target.outputProtocolFactory = $.assignFieldValue(target.outputProtocolFactory, values.outputProtocolFactory, "thrift.TProtocolFactory")
		target.forwardHeaders = values.forwardHeaders
		target.logger = values.logger
	}

	public async AcceptLoop(): globalThis.Promise<$.GoError> {
		const p: TSimpleServer | $.VarRef<TSimpleServer> | null = this;
		while (true) {
			let [closed, err] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleServer).innerAccept() : TSimpleServer.prototype.innerAccept.call(p))
			if (err != null) {
				return err
			}
			if (closed != 0) {
				return null
			}
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public InputProtocolFactory(): __goscript_protocol_factory.TProtocolFactory | null {
		const p: TSimpleServer | $.VarRef<TSimpleServer> | null = this;
		return $.pointerValue<TSimpleServer>(p).inputProtocolFactory
	}

	public InputTransportFactory(): __goscript_transport_factory.TTransportFactory | null {
		const p: TSimpleServer | $.VarRef<TSimpleServer> | null = this;
		return $.pointerValue<TSimpleServer>(p).inputTransportFactory
	}

	public async Listen(): globalThis.Promise<$.GoError> {
		const p: TSimpleServer | $.VarRef<TSimpleServer> | null = this;
		return $.pointerValue<Exclude<__goscript_server_transport.TServerTransport, null>>($.pointerValue<TSimpleServer>(p).serverTransport).Listen()
	}

	public OutputProtocolFactory(): __goscript_protocol_factory.TProtocolFactory | null {
		const p: TSimpleServer | $.VarRef<TSimpleServer> | null = this;
		return $.pointerValue<TSimpleServer>(p).outputProtocolFactory
	}

	public OutputTransportFactory(): __goscript_transport_factory.TTransportFactory | null {
		const p: TSimpleServer | $.VarRef<TSimpleServer> | null = this;
		return $.pointerValue<TSimpleServer>(p).outputTransportFactory
	}

	public ProcessorFactory(): __goscript_processor_factory.TProcessorFactory | null {
		const p: TSimpleServer | $.VarRef<TSimpleServer> | null = this;
		return $.pointerValue<TSimpleServer>(p).processorFactory
	}

	public async Serve(): globalThis.Promise<$.GoError> {
		let p: TSimpleServer | $.VarRef<TSimpleServer> | null = this;
		const p$: TSimpleServer = p == null ? $.pointerTarget<TSimpleServer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleServer>(p);
		;(p$ as TSimpleServer).logger = await __goscript_logger.fallbackLogger((p$ as TSimpleServer).logger)

		let err = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleServer).Listen() : TSimpleServer.prototype.Listen.call(p))
		if (err != null) {
			return err
		}
		await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleServer).AcceptLoop() : TSimpleServer.prototype.AcceptLoop.call(p))
		return null
	}

	public ServerTransport(): __goscript_server_transport.TServerTransport | null {
		const p: TSimpleServer | $.VarRef<TSimpleServer> | null = this;
		return $.pointerValue<TSimpleServer>(p).serverTransport
	}

	public SetForwardHeaders(headers: $.Slice<string>): void {
		let p: TSimpleServer | $.VarRef<TSimpleServer> | null = this;
		const p$: TSimpleServer = p == null ? $.pointerTarget<TSimpleServer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleServer>(p)
		let size = $.sliceLen(headers)
		if (size == 0) {
			;(p$ as TSimpleServer).forwardHeaders = null
			return
		}

		let keys: $.Slice<string> = $.makeSlice<string>(size, undefined, "string")
		$.copy(keys, headers);
		;(p$ as TSimpleServer).forwardHeaders = keys
	}

	public SetLogger(logger: __goscript_logger.Logger | null): void {
		let p: TSimpleServer | $.VarRef<TSimpleServer> | null = this;
		$.pointerValue<TSimpleServer>(p).logger = logger
	}

	public async Stop(): globalThis.Promise<$.GoError> {
		const p: TSimpleServer | $.VarRef<TSimpleServer> | null = this;
		using __defer = new $.DisposableStack()
		const p$: TSimpleServer = p == null ? $.pointerTarget<TSimpleServer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleServer>(p)
		await (p$ as TSimpleServer).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as TSimpleServer).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })
		if (atomic.LoadInt32($.fieldRef((p$ as TSimpleServer)._fields, "closed")) != 0) {
			return null
		}
		atomic.StoreInt32($.fieldRef((p$ as TSimpleServer)._fields, "closed"), 1)
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_server_transport.TServerTransport, null>>((p$ as TSimpleServer).serverTransport).Interrupt(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		await (p$ as TSimpleServer).wg.Wait()
		return null
	}

	public async innerAccept(): globalThis.Promise<[number, $.GoError]> {
		const p: TSimpleServer | $.VarRef<TSimpleServer> | null = this;
		using __defer = new $.DisposableStack()
		const p$: TSimpleServer = p == null ? $.pointerTarget<TSimpleServer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleServer>(p)
		let [client, err] = await $.pointerValue<Exclude<__goscript_server_transport.TServerTransport, null>>((p$ as TSimpleServer).serverTransport).Accept()
		await (p$ as TSimpleServer).mu.Lock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((p$ as TSimpleServer).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })
		let closed = atomic.LoadInt32($.fieldRef((p$ as TSimpleServer)._fields, "closed"))
		if (closed != 0) {
			return [closed, null]
		}
		if (err != null) {
			return [0, err]
		}
		if (client != null) {
			void (p$ as TSimpleServer).wg.Add(1)
			queueMicrotask(async () => { await (async (): globalThis.Promise<void> => {
				using __defer = new $.DisposableStack()
				const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Done())((p$ as TSimpleServer).wg), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*WaitGroup).Done-fm")
				__defer.defer(() => { __goscriptDeferCallee2() })
				{
					let __goscriptShadow0 = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as TSimpleServer).processRequests(client) : TSimpleServer.prototype.processRequests.call(p, client))
					if (__goscriptShadow0 != null) {
						await (p$ as TSimpleServer).logger!(await fmt.Sprintf("error processing request: %v", (__goscriptShadow0 as any)))
					}
				}
			})() })
		}
		return [0, null]
	}

	public async processRequests(client: __goscript_transport.TTransport | null): globalThis.Promise<$.GoError> {
		const p: TSimpleServer | $.VarRef<TSimpleServer> | null = this;
		let err: $.GoError = null! as $.GoError
		await using __defer = new $.AsyncDisposableStack()
		const p$: TSimpleServer = p == null ? $.pointerTarget<TSimpleServer>(p) : (p as any).__isVarRef === true ? (p as any).value : (p as any).__goValue === undefined ? (p as any) : $.pointerTarget<TSimpleServer>(p)
		__defer.defer(async () => { await (async (): globalThis.Promise<void> => {
			err = await treatEOFErrorsAsNil(err)
		})() })

		let processor = (__goscriptAwait = $.pointerValue<Exclude<__goscript_processor_factory.TProcessorFactory, null>>((p$ as TSimpleServer).processorFactory).GetProcessor(client), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let __goscriptTuple0: any = await $.pointerValue<Exclude<__goscript_transport_factory.TTransportFactory, null>>((p$ as TSimpleServer).inputTransportFactory).GetTransport(client)
		let inputTransport = __goscriptTuple0[0]
		err = __goscriptTuple0[1]
		if (err != null) {
			const __goscriptReturn0: $.GoError = err
			err = __goscriptReturn0
			await __defer.dispose()
			return err
		}
		let inputProtocol = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol_factory.TProtocolFactory, null>>((p$ as TSimpleServer).inputProtocolFactory).GetProtocol(inputTransport), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let outputTransport: __goscript_transport.TTransport | null = null! as __goscript_transport.TTransport | null
		let outputProtocol: __goscript_protocol.TProtocol | null = null! as __goscript_protocol.TProtocol | null

		// for THeaderProtocol, we must use the same protocol instance for
		// input and output so that the response is in the same dialect that
		// the server detected the request was in.
		let __goscriptTuple1: any = $.typeAssertTuple<__goscript_header_protocol.THeaderProtocol | $.VarRef<__goscript_header_protocol.THeaderProtocol> | null>(inputProtocol, /* @__PURE__ */ $.pointerType("thrift.THeaderProtocol"))
		let headerProtocol: __goscript_header_protocol.THeaderProtocol | $.VarRef<__goscript_header_protocol.THeaderProtocol> | null = __goscriptTuple1[0]
		let ok = __goscriptTuple1[1]
		if (ok) {
			outputProtocol = inputProtocol
		} else {
			let [oTrans, __goscriptShadow1] = await $.pointerValue<Exclude<__goscript_transport_factory.TTransportFactory, null>>((p$ as TSimpleServer).outputTransportFactory).GetTransport(client)
			if (__goscriptShadow1 != null) {
				const __goscriptReturn1: $.GoError = __goscriptShadow1
				err = __goscriptReturn1
				await __defer.dispose()
				return err
			}
			outputTransport = oTrans
			outputProtocol = (__goscriptAwait = $.pointerValue<Exclude<__goscript_protocol_factory.TProtocolFactory, null>>((p$ as TSimpleServer).outputProtocolFactory).GetProtocol(outputTransport), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		if (inputTransport != null) {
			const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Close())((inputTransport !== null && (inputTransport as any).__isVarRef !== true && (inputTransport as any).__goValue === undefined ? (inputTransport as Exclude<__goscript_transport.TTransport, null>) : $.pointerValue<Exclude<__goscript_transport.TTransport, null>>(inputTransport))), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "io.Closer.Close-fm")
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee3(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		}
		if (outputTransport != null) {
			const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Close())((outputTransport !== null && (outputTransport as any).__isVarRef !== true && (outputTransport as any).__goValue === undefined ? (outputTransport as Exclude<__goscript_transport.TTransport, null>) : $.pointerValue<Exclude<__goscript_transport.TTransport, null>>(outputTransport))), ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo), "io.Closer.Close-fm")
			__defer.defer(async () => { (__goscriptAwait = __goscriptDeferCallee4(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
		}
		while (true) {
			if (atomic.LoadInt32($.fieldRef((p$ as TSimpleServer)._fields, "closed")) != 0) {
				const __goscriptReturn2: $.GoError = null
				err = __goscriptReturn2
				await __defer.dispose()
				return err
			}

			let ctx = __goscript_response_helper.SetResponseHelper(__goscript_context.defaultCtx, (() => { const __goscriptLiteralField0 = __goscript_response_helper.NewTHeaderResponseHelper(outputProtocol); return new __goscript_response_helper.TResponseHelper({THeaderResponseHelper: __goscriptLiteralField0}, true) })())
			if (headerProtocol != null) {
				// We need to call ReadFrame here, otherwise we won't
				// get any headers on the AddReadTHeaderToContext call.
				//
				// ReadFrame is safe to be called multiple times so it
				// won't break when it's called again later when we
				// actually start to read the message.
				{
					let __goscriptShadow2 = await (headerProtocol !== null && (headerProtocol as any).__isVarRef !== true && (headerProtocol as any).__goValue === undefined ? ((headerProtocol as any) as __goscript_header_protocol.THeaderProtocol).ReadFrame(ctx) : __goscript_header_protocol.THeaderProtocol.prototype.ReadFrame.call(headerProtocol, ctx))
					if (__goscriptShadow2 != null) {
						const __goscriptReturn3: $.GoError = __goscriptShadow2
						err = __goscriptReturn3
						await __defer.dispose()
						return err
					}
				}
				ctx = __goscript_header_context.AddReadTHeaderToContext(ctx, (headerProtocol !== null && (headerProtocol as any).__isVarRef !== true && (headerProtocol as any).__goValue === undefined ? ((headerProtocol as any) as __goscript_header_protocol.THeaderProtocol).GetReadHeaders() : __goscript_header_protocol.THeaderProtocol.prototype.GetReadHeaders.call(headerProtocol)))
				ctx = __goscript_header_context.SetWriteHeaderList(ctx, (p$ as TSimpleServer).forwardHeaders)
			}

			let [__goscriptShadow3, __goscriptShadow4] = await (processor !== null && (processor as any).__isVarRef !== true && (processor as any).__goValue === undefined ? (processor as Exclude<__goscript_processor_factory.TProcessor, null>) : $.pointerValue<Exclude<__goscript_processor_factory.TProcessor, null>>(processor)).Process(ctx, inputProtocol, outputProtocol)
			if (errors.Is($.pointerValueOrNil((__goscriptShadow4 as $.GoError))!, $.pointerValueOrNil(ErrAbandonRequest)!)) {
				const __goscriptReturn4: $.GoError = (__goscriptAwait = (client !== null && (client as any).__isVarRef !== true && (client as any).__goValue === undefined ? (client as Exclude<__goscript_transport.TTransport, null>) : $.pointerValue<Exclude<__goscript_transport.TTransport, null>>(client)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				err = __goscriptReturn4
				await __defer.dispose()
				return err
			}
			if (errors.As($.pointerValueOrNil((__goscriptShadow4 as $.GoError))!, $.interfaceValue($.varRef<__goscript_transport_exception.TTransportException | null>(null! as __goscript_transport_exception.TTransportException | null), "*thrift.TTransportException", /* @__PURE__ */ $.pointerType("thrift.TTransportException"))) && (__goscriptShadow4 != null)) {
				const __goscriptReturn5: $.GoError = (__goscriptShadow4 as $.GoError)
				err = __goscriptReturn5
				await __defer.dispose()
				return err
			}
			let tae: $.VarRef<__goscript_application_exception.TApplicationException | null> = $.varRef(null! as __goscript_application_exception.TApplicationException | null)
			if (errors.As($.pointerValueOrNil((__goscriptShadow4 as $.GoError))!, $.interfaceValue(tae, "*thrift.TApplicationException", /* @__PURE__ */ $.pointerType("thrift.TApplicationException"))) && ((__goscriptAwait = $.pointerValue<Exclude<__goscript_application_exception.TApplicationException, null>>(tae.value).TypeId(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 1)) {
				continue
			}
			if (!__goscriptShadow3) {
				break
			}
		}
		const __goscriptReturn6: $.GoError = null
		err = __goscriptReturn6
		await __defer.dispose()
		return err
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"thrift.TSimpleServer",
		() => new TSimpleServer(),
		() => [$.methodSignature("AcceptLoop", [], ["error"], true), $.methodSignature("InputProtocolFactory", [], ["thrift.TProtocolFactory"], true), $.methodSignature("InputTransportFactory", [], ["thrift.TTransportFactory"], true), $.methodSignature("Listen", [], ["error"], true), $.methodSignature("OutputProtocolFactory", [], ["thrift.TProtocolFactory"], true), $.methodSignature("OutputTransportFactory", [], ["thrift.TTransportFactory"], true), $.methodSignature("ProcessorFactory", [], ["thrift.TProcessorFactory"], true), $.methodSignature("Serve", [], ["error"], true), $.methodSignature("ServerTransport", [], ["thrift.TServerTransport"], true), $.methodSignature("SetForwardHeaders", [["headers", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))]], [], true), $.methodSignature("SetLogger", [["logger", ({ kind: $.TypeKind.Function, name: "thrift.Logger", params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("Stop", [], ["error"], true), $.methodSignature("innerAccept", [], [/* @__PURE__ */ $.basicType("int32"), "error"], true), $.methodSignature("processRequests", [["client", "thrift.TTransport"]], [["err", "error"]], true)],
		TSimpleServer,
		() => [/* @__PURE__ */ $.structField("closed", /* @__PURE__ */ $.basicType("int32"), [0], 0, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("wg", "sync.WaitGroup", [1], 8, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [2], 24, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("processorFactory", "thrift.TProcessorFactory", [3], 32, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("serverTransport", "thrift.TServerTransport", [4], 48, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("inputTransportFactory", "thrift.TTransportFactory", [5], 64, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("outputTransportFactory", "thrift.TTransportFactory", [6], 80, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("inputProtocolFactory", "thrift.TProtocolFactory", [7], 96, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("outputProtocolFactory", "thrift.TProtocolFactory", [8], 112, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("forwardHeaders", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string")), [9], 128, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" }), /* @__PURE__ */ $.structField("logger", ({ kind: $.TypeKind.Function, name: "thrift.Logger", params: [/* @__PURE__ */ $.basicType("string")], results: [] } as $.FunctionTypeInfo), [10], 152, false, { pkgPath: "github.com/apache/thrift/lib/go/thrift" })]
	)
}

export let ErrAbandonRequest: $.GoError = errors.New("request abandoned")

export function __goscript_set_ErrAbandonRequest(__goscriptValue: $.GoError): void {
	ErrAbandonRequest = __goscriptValue
}

export let ServerConnectivityCheckInterval: time.Duration = 5000000n

export function __goscript_set_ServerConnectivityCheckInterval(__goscriptValue: time.Duration): void {
	ServerConnectivityCheckInterval = __goscriptValue
}

export function NewTSimpleServer2(processor: __goscript_processor_factory.TProcessor | null, serverTransport: __goscript_server_transport.TServerTransport | null): TSimpleServer | $.VarRef<TSimpleServer> | null {
	return NewTSimpleServerFactory2(__goscript_processor_factory.NewTProcessorFactory(processor), serverTransport)
}

export function NewTSimpleServer4(processor: __goscript_processor_factory.TProcessor | null, serverTransport: __goscript_server_transport.TServerTransport | null, transportFactory: __goscript_transport_factory.TTransportFactory | null, protocolFactory: __goscript_protocol_factory.TProtocolFactory | null): TSimpleServer | $.VarRef<TSimpleServer> | null {
	return NewTSimpleServerFactory4(__goscript_processor_factory.NewTProcessorFactory(processor), serverTransport, transportFactory, protocolFactory)
}

export function NewTSimpleServer6(processor: __goscript_processor_factory.TProcessor | null, serverTransport: __goscript_server_transport.TServerTransport | null, inputTransportFactory: __goscript_transport_factory.TTransportFactory | null, outputTransportFactory: __goscript_transport_factory.TTransportFactory | null, inputProtocolFactory: __goscript_protocol_factory.TProtocolFactory | null, outputProtocolFactory: __goscript_protocol_factory.TProtocolFactory | null): TSimpleServer | $.VarRef<TSimpleServer> | null {
	return NewTSimpleServerFactory6(__goscript_processor_factory.NewTProcessorFactory(processor), serverTransport, inputTransportFactory, outputTransportFactory, inputProtocolFactory, outputProtocolFactory)
}

export function NewTSimpleServerFactory2(processorFactory: __goscript_processor_factory.TProcessorFactory | null, serverTransport: __goscript_server_transport.TServerTransport | null): TSimpleServer | $.VarRef<TSimpleServer> | null {
	return NewTSimpleServerFactory6(processorFactory, serverTransport, __goscript_transport_factory.NewTTransportFactory(), __goscript_transport_factory.NewTTransportFactory(), $.interfaceValue<__goscript_protocol_factory.TProtocolFactory | null>(__goscript_binary_protocol.NewTBinaryProtocolFactoryDefault(), "*thrift.TBinaryProtocolFactory", /* @__PURE__ */ $.pointerType("thrift.TBinaryProtocolFactory")), $.interfaceValue<__goscript_protocol_factory.TProtocolFactory | null>(__goscript_binary_protocol.NewTBinaryProtocolFactoryDefault(), "*thrift.TBinaryProtocolFactory", /* @__PURE__ */ $.pointerType("thrift.TBinaryProtocolFactory")))
}

export function NewTSimpleServerFactory4(processorFactory: __goscript_processor_factory.TProcessorFactory | null, serverTransport: __goscript_server_transport.TServerTransport | null, transportFactory: __goscript_transport_factory.TTransportFactory | null, protocolFactory: __goscript_protocol_factory.TProtocolFactory | null): TSimpleServer | $.VarRef<TSimpleServer> | null {
	return NewTSimpleServerFactory6(processorFactory, serverTransport, transportFactory, transportFactory, protocolFactory, protocolFactory)
}

export function NewTSimpleServerFactory6(processorFactory: __goscript_processor_factory.TProcessorFactory | null, serverTransport: __goscript_server_transport.TServerTransport | null, inputTransportFactory: __goscript_transport_factory.TTransportFactory | null, outputTransportFactory: __goscript_transport_factory.TTransportFactory | null, inputProtocolFactory: __goscript_protocol_factory.TProtocolFactory | null, outputProtocolFactory: __goscript_protocol_factory.TProtocolFactory | null): TSimpleServer | $.VarRef<TSimpleServer> | null {
	return new TSimpleServer({processorFactory: processorFactory, serverTransport: serverTransport, inputTransportFactory: inputTransportFactory, outputTransportFactory: outputTransportFactory, inputProtocolFactory: inputProtocolFactory, outputProtocolFactory: outputProtocolFactory})
}

export async function treatEOFErrorsAsNil(err: $.GoError): globalThis.Promise<$.GoError> {
	if (err == null) {
		return null
	}
	if (errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(io.EOF)!)) {
		return null
	}
	let te: $.VarRef<__goscript_transport_exception.TTransportException | null> = $.varRef(null! as __goscript_transport_exception.TTransportException | null)
	// NOT_OPEN returned by processor.Process is usually caused by client
	// abandoning the connection (e.g. client side time out, or just client
	// closes connections from the pool because of shutting down).
	// Those logs will be very noisy, so suppress those logs as well.
	if (errors.As($.pointerValueOrNil(err)!, $.interfaceValue(te, "*thrift.TTransportException", /* @__PURE__ */ $.pointerType("thrift.TTransportException"))) && (((__goscriptAwait = $.pointerValue<Exclude<__goscript_transport_exception.TTransportException, null>>(te.value).TypeId(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 4) || ((__goscriptAwait = $.pointerValue<Exclude<__goscript_transport_exception.TTransportException, null>>(te.value).TypeId(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == 1))) {
		return null
	}
	return err
}

var __goscriptAwait: any
