// Generated file based on tracedstream.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as transport from "@goscript/go.uber.org/yarpc/api/transport/index.js"

import * as __goscript_interceptor from "./interceptor.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/go.uber.org/yarpc/api/transport/index.js"
import "./interceptor.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/internal/tracinginterceptor", ["tracinginterceptor.tracedClientStream", "tracinginterceptor.tracedServerStream"])

export class tracedClientStream {
	public get clientStream(): transport.ClientStream | $.VarRef<transport.ClientStream> | null {
		return this._fields.clientStream
	}

	public set clientStream(value: transport.ClientStream | $.VarRef<transport.ClientStream> | null) {
		this._fields.clientStream = value
	}

	public get span(): opentracing.Span | null {
		return this._fields.span
	}

	public set span(value: opentracing.Span | null) {
		this._fields.span = value
	}

	public get closed(): atomic.Bool {
		return this._fields.closed
	}

	public set closed(value: atomic.Bool) {
		this._fields.closed = value
	}

	public _fields: {
		clientStream: transport.ClientStream | $.VarRef<transport.ClientStream> | null
		span: opentracing.Span | null
		closed: atomic.Bool
	}

	constructor(init?: Partial<{clientStream?: transport.ClientStream | $.VarRef<transport.ClientStream> | null, span?: opentracing.Span | null, closed?: atomic.Bool}>, __goscriptValue?: boolean) {
		this._fields = {
			clientStream: init?.clientStream ?? (null! as transport.ClientStream | $.VarRef<transport.ClientStream> | null),
			span: init?.span ?? (null! as opentracing.Span | null),
			closed: init?.closed ? init.closed.clone() : new atomic.Bool(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tracedClientStream {
		return new tracedClientStream(this, true)
	}

	public __goscriptAssign(source: tracedClientStream): void {
		const target = this._fields
		const values = source._fields
		target.clientStream = values.clientStream
		target.span = $.assignFieldValue(target.span, values.span, "opentracing.Span")
		$.assignStruct(target.closed, values.closed)
	}

	public async Close(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const t: tracedClientStream | $.VarRef<tracedClientStream> | null = this;
		return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as tracedClientStream).closeWithErr(transport.ClientStream.prototype.Close.call($.pointerValue<tracedClientStream>(t).clientStream, ctx)) : tracedClientStream.prototype.closeWithErr.call(t, transport.ClientStream.prototype.Close.call($.pointerValue<tracedClientStream>(t).clientStream, ctx)))
	}

	public Context(): context.Context | null {
		const t: tracedClientStream | $.VarRef<tracedClientStream> | null = this;
		return transport.ClientStream.prototype.Context.call($.pointerValue<tracedClientStream>(t).clientStream)
	}

	public async Headers(): globalThis.Promise<[transport.Headers, $.GoError]> {
		const t: tracedClientStream | $.VarRef<tracedClientStream> | null = this;
		let [headers, err] = transport.ClientStream.prototype.Headers.call($.pointerValue<tracedClientStream>(t).clientStream)
		if (err != null) {
			return [(headers).clone(), await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as tracedClientStream).closeWithErr(err) : tracedClientStream.prototype.closeWithErr.call(t, err))]
		}
		return [(headers).clone(), null]
	}

	public async ReceiveMessage(ctx: context.Context | null): globalThis.Promise<[transport.StreamMessage | $.VarRef<transport.StreamMessage> | null, $.GoError]> {
		const t: tracedClientStream | $.VarRef<tracedClientStream> | null = this;
		let __goscriptTuple0: any = transport.ClientStream.prototype.ReceiveMessage.call($.pointerValue<tracedClientStream>(t).clientStream, ctx)
		let msg: transport.StreamMessage | $.VarRef<transport.StreamMessage> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [null, await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as tracedClientStream).closeWithErr(err) : tracedClientStream.prototype.closeWithErr.call(t, err))]
		}
		return [msg, null]
	}

	public Request(): transport.StreamRequest | $.VarRef<transport.StreamRequest> | null {
		const t: tracedClientStream | $.VarRef<tracedClientStream> | null = this;
		return transport.ClientStream.prototype.Request.call($.pointerValue<tracedClientStream>(t).clientStream)
	}

	public async SendMessage(ctx: context.Context | null, msg: transport.StreamMessage | $.VarRef<transport.StreamMessage> | null): globalThis.Promise<$.GoError> {
		const t: tracedClientStream | $.VarRef<tracedClientStream> | null = this;
		{
			let err = transport.ClientStream.prototype.SendMessage.call($.pointerValue<tracedClientStream>(t).clientStream, ctx, msg)
			if (err != null) {
				return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as tracedClientStream).closeWithErr(err) : tracedClientStream.prototype.closeWithErr.call(t, err))
			}
		}
		return null
	}

	public async closeWithErr(err: $.GoError): globalThis.Promise<$.GoError> {
		const t: tracedClientStream | $.VarRef<tracedClientStream> | null = this;
		const t$: tracedClientStream = t == null ? $.pointerTarget<tracedClientStream>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<tracedClientStream>(t)
		if (!(t$ as tracedClientStream).closed.Swap(true) && ((t$ as tracedClientStream).span != null)) {
			void (__goscriptAwait = $.pointerValue<Exclude<opentracing.Span, null>>((t$ as tracedClientStream).span).Finish(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			// treat EOF as non-error; everything else is an error
			let isErr = (err != null) && !errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(io.EOF)!)
			// updateSpanWithErrorDetails will tag the span appropriately and return the original error
			await __goscript_interceptor.updateSpanWithErrorDetails((t$ as tracedClientStream).span, isErr, null, err)
		}
		return err
	}

	static __typeInfo = $.registerStructType(
		"tracinginterceptor.tracedClientStream",
		() => new tracedClientStream(),
		() => [{ name: "Close", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "Context", args: [], returns: [{ type: "context.Context" }], pointerReceiver: true }, { name: "Headers", args: [], returns: [{ type: "transport.Headers" }, { type: "error" }], pointerReceiver: true }, { name: "ReceiveMessage", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.StreamMessage") }, { type: "error" }], pointerReceiver: true }, { name: "Request", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.StreamRequest") }], pointerReceiver: true }, { name: "SendMessage", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "closeWithErr", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		tracedClientStream,
		() => [{ name: "clientStream", key: "clientStream", type: /* @__PURE__ */ $.pointerType("transport.ClientStream") }, { name: "span", key: "span", type: "opentracing.Span" }, { name: "closed", key: "closed", type: "atomic.Bool" }]
	)
}

export class tracedServerStream {
	public get serverStream(): transport.ServerStream | $.VarRef<transport.ServerStream> | null {
		return this._fields.serverStream
	}

	public set serverStream(value: transport.ServerStream | $.VarRef<transport.ServerStream> | null) {
		this._fields.serverStream = value
	}

	public get span(): opentracing.Span | null {
		return this._fields.span
	}

	public set span(value: opentracing.Span | null) {
		this._fields.span = value
	}

	public get closed(): atomic.Bool {
		return this._fields.closed
	}

	public set closed(value: atomic.Bool) {
		this._fields.closed = value
	}

	public get ctx(): context.Context | null {
		return this._fields.ctx
	}

	public set ctx(value: context.Context | null) {
		this._fields.ctx = value
	}

	public _fields: {
		serverStream: transport.ServerStream | $.VarRef<transport.ServerStream> | null
		span: opentracing.Span | null
		closed: atomic.Bool
		ctx: context.Context | null
	}

	constructor(init?: Partial<{serverStream?: transport.ServerStream | $.VarRef<transport.ServerStream> | null, span?: opentracing.Span | null, closed?: atomic.Bool, ctx?: context.Context | null}>, __goscriptValue?: boolean) {
		this._fields = {
			serverStream: init?.serverStream ?? (null! as transport.ServerStream | $.VarRef<transport.ServerStream> | null),
			span: init?.span ?? (null! as opentracing.Span | null),
			closed: init?.closed ? init.closed.clone() : new atomic.Bool(undefined, true),
			ctx: init?.ctx ?? (null! as context.Context | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): tracedServerStream {
		return new tracedServerStream(this, true)
	}

	public __goscriptAssign(source: tracedServerStream): void {
		const target = this._fields
		const values = source._fields
		target.serverStream = values.serverStream
		target.span = $.assignFieldValue(target.span, values.span, "opentracing.Span")
		$.assignStruct(target.closed, values.closed)
		target.ctx = $.assignFieldValue(target.ctx, values.ctx, "context.Context")
	}

	public Context(): context.Context | null {
		const t: tracedServerStream | $.VarRef<tracedServerStream> | null = this;
		const t$: tracedServerStream = t == null ? $.pointerTarget<tracedServerStream>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<tracedServerStream>(t)
		// Return the enriched context if available, otherwise fall back to the server stream's context
		if ((t$ as tracedServerStream).ctx != null) {
			return (t$ as tracedServerStream).ctx
		}
		return transport.ServerStream.prototype.Context.call((t$ as tracedServerStream).serverStream)
	}

	public async ReceiveMessage(ctx: context.Context | null): globalThis.Promise<[transport.StreamMessage | $.VarRef<transport.StreamMessage> | null, $.GoError]> {
		const t: tracedServerStream | $.VarRef<tracedServerStream> | null = this;
		let __goscriptTuple1: any = transport.ServerStream.prototype.ReceiveMessage.call($.pointerValue<tracedServerStream>(t).serverStream, ctx)
		let msg: transport.StreamMessage | $.VarRef<transport.StreamMessage> | null = __goscriptTuple1[0]
		let err = __goscriptTuple1[1]
		if (err != null) {
			return [null, await (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as tracedServerStream).closeWithErr(err) : tracedServerStream.prototype.closeWithErr.call(t, err))]
		}
		return [msg, null]
	}

	public Request(): transport.StreamRequest | $.VarRef<transport.StreamRequest> | null {
		const t: tracedServerStream | $.VarRef<tracedServerStream> | null = this;
		return transport.ServerStream.prototype.Request.call($.pointerValue<tracedServerStream>(t).serverStream)
	}

	public async SendHeaders(h: transport.Headers): globalThis.Promise<$.GoError> {
		const t: tracedServerStream | $.VarRef<tracedServerStream> | null = this;
		{
			let err = transport.ServerStream.prototype.SendHeaders.call($.pointerValue<tracedServerStream>(t).serverStream, (h).clone())
			if (err != null) {
				return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as tracedServerStream).closeWithErr(err) : tracedServerStream.prototype.closeWithErr.call(t, err))
			}
		}
		return null
	}

	public async SendMessage(ctx: context.Context | null, msg: transport.StreamMessage | $.VarRef<transport.StreamMessage> | null): globalThis.Promise<$.GoError> {
		const t: tracedServerStream | $.VarRef<tracedServerStream> | null = this;
		{
			let err = transport.ServerStream.prototype.SendMessage.call($.pointerValue<tracedServerStream>(t).serverStream, ctx, msg)
			if (err != null) {
				return (t !== null && (t as any).__isVarRef !== true && (t as any).__goValue === undefined ? ((t as any) as tracedServerStream).closeWithErr(err) : tracedServerStream.prototype.closeWithErr.call(t, err))
			}
		}
		return null
	}

	public async closeWithErr(err: $.GoError): globalThis.Promise<$.GoError> {
		const t: tracedServerStream | $.VarRef<tracedServerStream> | null = this;
		const t$: tracedServerStream = t == null ? $.pointerTarget<tracedServerStream>(t) : (t as any).__isVarRef === true ? (t as any).value : (t as any).__goValue === undefined ? (t as any) : $.pointerTarget<tracedServerStream>(t)
		if (!(t$ as tracedServerStream).closed.Swap(true) && ((t$ as tracedServerStream).span != null)) {
			void (__goscriptAwait = $.pointerValue<Exclude<opentracing.Span, null>>((t$ as tracedServerStream).span).Finish(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			// treat EOF as non-error; everything else is an error
			let isErr = (err != null) && !errors.Is($.pointerValueOrNil(err)!, $.pointerValueOrNil(io.EOF)!)
			// updateSpanWithErrorDetails will tag the span appropriately and return the original error
			await __goscript_interceptor.updateSpanWithErrorDetails((t$ as tracedServerStream).span, isErr, null, err)
		}
		return err
	}

	static __typeInfo = $.registerStructType(
		"tracinginterceptor.tracedServerStream",
		() => new tracedServerStream(),
		() => [{ name: "Context", args: [], returns: [{ type: "context.Context" }], pointerReceiver: true }, { name: "ReceiveMessage", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.StreamMessage") }, { type: "error" }], pointerReceiver: true }, { name: "Request", args: [], returns: [{ type: /* @__PURE__ */ $.pointerType("transport.StreamRequest") }], pointerReceiver: true }, { name: "SendHeaders", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "SendMessage", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }, { type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }, { name: "closeWithErr", args: [{ type: { kind: $.TypeKind.Basic, name: "unknown" } }], returns: [{ type: "error" }], pointerReceiver: true }],
		tracedServerStream,
		() => [{ name: "serverStream", key: "serverStream", type: /* @__PURE__ */ $.pointerType("transport.ServerStream") }, { name: "span", key: "span", type: "opentracing.Span" }, { name: "closed", key: "closed", type: "atomic.Bool" }, { name: "ctx", key: "ctx", type: "context.Context" }]
	)
}

var __goscriptAwait: any
