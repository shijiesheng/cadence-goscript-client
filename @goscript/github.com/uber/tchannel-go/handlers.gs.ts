// Generated file based on handlers.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sync from "@goscript/sync/index.js"

import * as context from "@goscript/golang.org/x/net/context/index.js"

import * as context2 from "@goscript/context/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as relay from "@goscript/github.com/uber/tchannel-go/relay/index.js"

import type * as arg2 from "@goscript/github.com/uber/tchannel-go/thrift/arg2/index.js"

import * as tos from "@goscript/github.com/uber/tchannel-go/tos/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import type * as io from "@goscript/io/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as net from "@goscript/net/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as time from "@goscript/time/index.js"

import type * as __goscript__arguments from "./arguments.gs.ts"

import * as __goscript_calloptions from "./calloptions.gs.ts"

import * as __goscript_channel from "./channel.gs.ts"

import type * as __goscript_channelstate_string from "./channelstate_string.gs.ts"

import * as __goscript_checksum from "./checksum.gs.ts"

import * as __goscript_connection from "./connection.gs.ts"

import * as __goscript_connection_direction from "./connection_direction.gs.ts"

import * as __goscript_connectionstate_string from "./connectionstate_string.gs.ts"

import * as __goscript_errors from "./errors.gs.ts"

import * as __goscript_fragmenting_reader from "./fragmenting_reader.gs.ts"

import * as __goscript_fragmenting_writer from "./fragmenting_writer.gs.ts"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_frame_pool from "./frame_pool.gs.ts"

import * as __goscript_health from "./health.gs.ts"

import type * as __goscript_idle_sweep from "./idle_sweep.gs.ts"

import * as __goscript_inbound from "./inbound.gs.ts"

import * as __goscript_introspection from "./introspection.gs.ts"

import * as __goscript_logger from "./logger.gs.ts"

import * as __goscript_messages from "./messages.gs.ts"

import * as __goscript_messagetype_string from "./messagetype_string.gs.ts"

import * as __goscript_mex from "./mex.gs.ts"

import * as __goscript_outbound from "./outbound.gs.ts"

import * as __goscript_peer from "./peer.gs.ts"

import * as __goscript_peer_heap from "./peer_heap.gs.ts"

import * as __goscript_peer_strategies from "./peer_strategies.gs.ts"

import * as __goscript_preinit_connection from "./preinit_connection.gs.ts"

import * as __goscript_relay from "./relay.gs.ts"

import * as __goscript_relay_api from "./relay_api.gs.ts"

import * as __goscript_relay_messages from "./relay_messages.gs.ts"

import * as __goscript_relay_timer_pool from "./relay_timer_pool.gs.ts"

import * as __goscript_reqres from "./reqres.gs.ts"

import * as __goscript_reqresreaderstate_string from "./reqresreaderstate_string.gs.ts"

import * as __goscript_reqreswriterstate_string from "./reqreswriterstate_string.gs.ts"

import * as __goscript_retry from "./retry.gs.ts"

import * as __goscript_retryon_string from "./retryon_string.gs.ts"

import * as __goscript_root_peer_list from "./root_peer_list.gs.ts"

import * as __goscript_sockio_non_unix from "./sockio_non_unix.gs.ts"

import * as __goscript_stats from "./stats.gs.ts"

import * as __goscript_subchannel from "./subchannel.gs.ts"

import type * as __goscript_systemerrcode_string from "./systemerrcode_string.gs.ts"

import * as __goscript_tracing from "./tracing.gs.ts"
import "@goscript/reflect/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sync/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber/tchannel-go/relay/index.js"
import "@goscript/github.com/uber/tchannel-go/tos/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/net/index.js"
import "@goscript/syscall/index.js"
import "@goscript/time/index.js"
import "./calloptions.gs.ts"
import "./channel.gs.ts"
import "./checksum.gs.ts"
import "./connection.gs.ts"
import "./connection_direction.gs.ts"
import "./connectionstate_string.gs.ts"
import "./errors.gs.ts"
import "./fragmenting_reader.gs.ts"
import "./fragmenting_writer.gs.ts"
import "./frame.gs.ts"
import "./frame_pool.gs.ts"
import "./health.gs.ts"
import "./inbound.gs.ts"
import "./introspection.gs.ts"
import "./logger.gs.ts"
import "./messages.gs.ts"
import "./messagetype_string.gs.ts"
import "./mex.gs.ts"
import "./outbound.gs.ts"
import "./peer.gs.ts"
import "./peer_heap.gs.ts"
import "./peer_strategies.gs.ts"
import "./preinit_connection.gs.ts"
import "./relay.gs.ts"
import "./relay_api.gs.ts"
import "./relay_messages.gs.ts"
import "./relay_timer_pool.gs.ts"
import "./reqres.gs.ts"
import "./reqresreaderstate_string.gs.ts"
import "./reqreswriterstate_string.gs.ts"
import "./retry.gs.ts"
import "./retryon_string.gs.ts"
import "./root_peer_list.gs.ts"
import "./sockio_non_unix.gs.ts"
import "./stats.gs.ts"
import "./subchannel.gs.ts"
import "./tracing.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.Handler", "tchannel.registrar", "tchannel.HandlerFunc", "tchannel.ErrorHandlerFunc", "tchannel.handlerMap", "tchannel.channelHandler", "tchannel.userHandlerWithSkip"])

export type Handler = {
	Handle(ctx: context.Context | null, call: __goscript_inbound.InboundCall | $.VarRef<__goscript_inbound.InboundCall> | null): void
}

$.registerInterfaceType(
	"tchannel.Handler",
	null,
	[$.methodSignature("Handle", [["ctx", "context.Context"], ["call", /* @__PURE__ */ $.pointerType("tchannel.InboundCall")]])]
);

export type registrar = {
	Register(h: Handler | null, methodName: string): void
}

$.registerInterfaceType(
	"tchannel.registrar",
	null,
	[$.methodSignature("Register", [["h", "tchannel.Handler"], ["methodName", /* @__PURE__ */ $.basicType("string")]])]
);

export type HandlerFunc = ((ctx: context.Context | null, call: __goscript_inbound.InboundCall | $.VarRef<__goscript_inbound.InboundCall> | null) => void) | null

$.registerNamedValueType(
	"tchannel.HandlerFunc",
	{Handle: (receiver: any, ...args: any[]) => (HandlerFunc_Handle as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Handle", [["ctx", "context.Context"], ["call", /* @__PURE__ */ $.pointerType("tchannel.InboundCall")]])]
);

$.registerNamedValueType(
	"*tchannel.HandlerFunc",
	{Handle: (receiver: any, ...args: any[]) => (HandlerFunc_Handle as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Handle", [["ctx", "context.Context"], ["call", /* @__PURE__ */ $.pointerType("tchannel.InboundCall")]])]
);

export type ErrorHandlerFunc = ((ctx: context.Context | null, call: __goscript_inbound.InboundCall | $.VarRef<__goscript_inbound.InboundCall> | null) => $.GoError | globalThis.Promise<$.GoError>) | null

$.registerNamedValueType(
	"tchannel.ErrorHandlerFunc",
	{Handle: (receiver: any, ...args: any[]) => (ErrorHandlerFunc_Handle as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), getLogFields: (receiver: any, ...args: any[]) => (ErrorHandlerFunc_getLogFields as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Handle", [["ctx", "context.Context"], ["call", /* @__PURE__ */ $.pointerType("tchannel.InboundCall")]]), $.methodSignature("getLogFields", [], [/* @__PURE__ */ $.sliceType("tchannel.LogField", "tchannel.LogFields")])]
);

$.registerNamedValueType(
	"*tchannel.ErrorHandlerFunc",
	{Handle: (receiver: any, ...args: any[]) => (ErrorHandlerFunc_Handle as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), getLogFields: (receiver: any, ...args: any[]) => (ErrorHandlerFunc_getLogFields as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Handle", [["ctx", "context.Context"], ["call", /* @__PURE__ */ $.pointerType("tchannel.InboundCall")]]), $.methodSignature("getLogFields", [], [/* @__PURE__ */ $.sliceType("tchannel.LogField", "tchannel.LogFields")])]
);

export class handlerMap {
	public get RWMutex(): sync.RWMutex {
		return this._fields.RWMutex
	}

	public set RWMutex(value: sync.RWMutex) {
		this._fields.RWMutex = value
	}

	public get handlers(): globalThis.Map<string, Handler | null> | null {
		return this._fields.handlers
	}

	public set handlers(value: globalThis.Map<string, Handler | null> | null) {
		this._fields.handlers = value
	}

	public _fields: {
		RWMutex: sync.RWMutex
		handlers: globalThis.Map<string, Handler | null> | null
	}

	constructor(init?: Partial<{RWMutex?: sync.RWMutex, handlers?: globalThis.Map<string, Handler | null> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			RWMutex: init?.RWMutex ? $.markAsStructValue($.cloneStructValue(init.RWMutex)) : $.markAsStructValue(new sync.RWMutex()),
			handlers: init?.handlers ?? (null! as globalThis.Map<string, Handler | null> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): handlerMap {
		return new handlerMap(this, true)
	}

	public __goscriptAssign(source: handlerMap): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.RWMutex, values.RWMutex)
		target.handlers = values.handlers
	}

	public async Handle(ctx: context.Context | null, call: __goscript_inbound.InboundCall | $.VarRef<__goscript_inbound.InboundCall> | null): globalThis.Promise<void> {
		const hmap: handlerMap | $.VarRef<handlerMap> | null = this;
		let c: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null = $.pointerValue<__goscript_inbound.InboundCall>(call).conn
		let c$: __goscript_connection.Connection = c == null ? $.pointerTarget<__goscript_connection.Connection>(c) : (c as any).__isVarRef === true ? (c as any).value : (c as any).__goValue === undefined ? (c as any) : $.pointerTarget<__goscript_connection.Connection>(c)
		let h = await handlerMap.prototype.find.call(hmap, (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).Method() : __goscript_inbound.InboundCall.prototype.Method.call(call)))
		if (h == null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as __goscript_connection.Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([(() => { const __goscriptLiteralField1 = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).ServiceName() : __goscript_inbound.InboundCall.prototype.ServiceName.call(call)); return new __goscript_logger.LogField({Key: "serviceName", Value: __goscriptLiteralField1}, true) })(), (() => { const __goscriptLiteralField2 = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).MethodString() : __goscript_inbound.InboundCall.prototype.MethodString.call(call)); return new __goscript_logger.LogField({Key: "method", Value: __goscriptLiteralField2}, true) })()])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Error("Couldn't find handler."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await __goscript_inbound.InboundCallResponse.prototype.SendSystemError.call((call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).Response() : __goscript_inbound.InboundCall.prototype.Response.call(call)), await __goscript_errors.NewSystemError(6, "no handler for service %q and method %q", $.arrayToSlice<any>([(call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).ServiceName() : __goscript_inbound.InboundCall.prototype.ServiceName.call(call)), $.interfaceValue((call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).Method() : __goscript_inbound.InboundCall.prototype.Method.call(call)), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8")))])))
			return
		}

		if ((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as __goscript_connection.Connection).channelConnectionCommon.log).Enabled(1), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((c$ as __goscript_connection.Connection).channelConnectionCommon.log).Debugf("Dispatching %s:%s from %s", $.arrayToSlice<any>([(call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).ServiceName() : __goscript_inbound.InboundCall.prototype.ServiceName.call(call)), $.interfaceValue((call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).Method() : __goscript_inbound.InboundCall.prototype.Method.call(call)), "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))), $.interfaceValue(((c$ as __goscript_connection.Connection).remotePeerInfo).clone(), "tchannel.PeerInfo", "tchannel.PeerInfo")])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		void (__goscriptAwait = (h !== null && (h as any).__isVarRef !== true && (h as any).__goValue === undefined ? (h as Exclude<Handler, null>) : $.pointerValue<Exclude<Handler, null>>(h)).Handle(ctx, call), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Register(h: Handler | null, method: string): globalThis.Promise<void> {
		let hmap: handlerMap | $.VarRef<handlerMap> | null = this;
		using __defer = new $.DisposableStack()
		const hmap$: handlerMap = hmap == null ? $.pointerTarget<handlerMap>(hmap) : (hmap as any).__isVarRef === true ? (hmap as any).value : (hmap as any).__goValue === undefined ? (hmap as any) : $.pointerTarget<handlerMap>(hmap)
		await (hmap$ as handlerMap).RWMutex.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((hmap$ as handlerMap).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		if ((hmap$ as handlerMap).handlers == null) {
			;(hmap$ as handlerMap).handlers = $.makeMap<string, Handler | null>()
		}

		$.mapSet((hmap$ as handlerMap).handlers, method, h)
	}

	public async find(method: $.Slice<number>): globalThis.Promise<Handler | null> {
		const hmap: handlerMap | $.VarRef<handlerMap> | null = this;
		await $.pointerValue<handlerMap>(hmap).RWMutex.RLock()
		let handler = $.mapGet<string, Handler | null, Handler | null>($.pointerValue<handlerMap>(hmap).handlers, $.bytesToString(method), null)[0]
		$.pointerValue<handlerMap>(hmap).RWMutex.RUnlock()

		return handler
	}

	public Lock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).Lock()
	}

	public RLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RLock()
	}

	public RLocker(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RLocker()
	}

	public RUnlock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).RUnlock()
	}

	public TryLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).TryLock()
	}

	public TryRLock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).TryRLock()
	}

	public Unlock(): any {
		return $.pointerValue<sync.RWMutex>(this.RWMutex).Unlock()
	}

	static __typeInfo = $.registerStructType(
		"tchannel.handlerMap",
		() => new handlerMap(),
		() => [$.methodSignature("Handle", [["ctx", "context.Context"], ["call", /* @__PURE__ */ $.pointerType("tchannel.InboundCall")]], [], true), $.methodSignature("Register", [["h", "tchannel.Handler"], ["method", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("find", [["method", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))]], ["tchannel.Handler"], true), $.methodSignature("Lock", [], [], true), $.methodSignature("RLock", [], [], true), $.methodSignature("RLocker", [], ["sync.Locker"], true), $.methodSignature("RUnlock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		handlerMap,
		() => [/* @__PURE__ */ $.structField("RWMutex", "sync.RWMutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("handlers", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), "tchannel.Handler"), [1], 24, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class channelHandler {
	public get ch(): __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null {
		return this._fields.ch
	}

	public set ch(value: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null) {
		this._fields.ch = value
	}

	public _fields: {
		ch: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null
	}

	constructor(init?: Partial<{ch?: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			ch: init?.ch ?? (null! as __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): channelHandler {
		return new channelHandler(this, true)
	}

	public __goscriptAssign(source: channelHandler): void {
		const target = this._fields
		const values = source._fields
		target.ch = values.ch
	}

	public async Handle(ctx: context.Context | null, call: __goscript_inbound.InboundCall | $.VarRef<__goscript_inbound.InboundCall> | null): globalThis.Promise<void> {
		const c = this;
		void (__goscriptAwait = $.pointerValue<Exclude<Handler, null>>($.pointerValue<__goscript_subchannel.SubChannel>(await __goscript_channel.Channel.prototype.GetSubChannel.call(c.ch, (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).ServiceName() : __goscript_inbound.InboundCall.prototype.ServiceName.call(call)), null)).handler).Handle(ctx, call), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Register(h: Handler | null, methodName: string): globalThis.Promise<void> {
		const c = this;
		await __goscript_subchannel.SubChannel.prototype.Register.call(await __goscript_channel.Channel.prototype.GetSubChannel.call(c.ch, (await __goscript_channel.Channel.prototype.PeerInfo.call(c.ch)).ServiceName, null), h, methodName)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.channelHandler",
		() => new channelHandler(),
		() => [$.methodSignature("Handle", [["ctx", "context.Context"], ["call", /* @__PURE__ */ $.pointerType("tchannel.InboundCall")]]), $.methodSignature("Register", [["h", "tchannel.Handler"], ["methodName", /* @__PURE__ */ $.basicType("string")]])],
		channelHandler,
		() => [/* @__PURE__ */ $.structField("ch", /* @__PURE__ */ $.pointerType("tchannel.Channel"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class userHandlerWithSkip {
	public get localHandler(): channelHandler {
		return this._fields.localHandler
	}

	public set localHandler(value: channelHandler) {
		this._fields.localHandler = value
	}

	public get ignoreUserHandler(): globalThis.Map<string, {}> | null {
		return this._fields.ignoreUserHandler
	}

	public set ignoreUserHandler(value: globalThis.Map<string, {}> | null) {
		this._fields.ignoreUserHandler = value
	}

	public get userHandler(): Handler | null {
		return this._fields.userHandler
	}

	public set userHandler(value: Handler | null) {
		this._fields.userHandler = value
	}

	public _fields: {
		localHandler: channelHandler
		ignoreUserHandler: globalThis.Map<string, {}> | null
		userHandler: Handler | null
	}

	constructor(init?: Partial<{localHandler?: channelHandler, ignoreUserHandler?: globalThis.Map<string, {}> | null, userHandler?: Handler | null}>, __goscriptValue?: boolean) {
		this._fields = {
			localHandler: init?.localHandler ? init.localHandler.clone() : new channelHandler(undefined, true),
			ignoreUserHandler: init?.ignoreUserHandler ?? (null! as globalThis.Map<string, {}> | null),
			userHandler: init?.userHandler ?? (null! as Handler | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): userHandlerWithSkip {
		return new userHandlerWithSkip(this, true)
	}

	public __goscriptAssign(source: userHandlerWithSkip): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.localHandler, values.localHandler)
		target.ignoreUserHandler = values.ignoreUserHandler
		target.userHandler = $.assignFieldValue(target.userHandler, values.userHandler, "tchannel.Handler")
	}

	public async Handle(ctx: context.Context | null, call: __goscript_inbound.InboundCall | $.VarRef<__goscript_inbound.InboundCall> | null): globalThis.Promise<void> {
		const u = this;
		{
			let [, ok] = $.mapGet<string, {}, {}>(u.ignoreUserHandler, (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).MethodString() : __goscript_inbound.InboundCall.prototype.MethodString.call(call)), {})
			if (ok) {
				await $.markAsStructValue($.cloneStructValue(u.localHandler)).Handle(ctx, call)
				return
			}
		}
		void (__goscriptAwait = $.pointerValue<Exclude<Handler, null>>(u.userHandler).Handle(ctx, call), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public async Register(h: Handler | null, methodName: string): globalThis.Promise<void> {
		const u = this;
		await $.markAsStructValue($.cloneStructValue(u.localHandler)).Register(h, methodName)
	}

	static __typeInfo = $.registerStructType(
		"tchannel.userHandlerWithSkip",
		() => new userHandlerWithSkip(),
		() => [$.methodSignature("Handle", [["ctx", "context.Context"], ["call", /* @__PURE__ */ $.pointerType("tchannel.InboundCall")]]), $.methodSignature("Register", [["h", "tchannel.Handler"], ["methodName", /* @__PURE__ */ $.basicType("string")]])],
		userHandlerWithSkip,
		() => [/* @__PURE__ */ $.structField("localHandler", "tchannel.channelHandler", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("ignoreUserHandler", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [1], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("userHandler", "tchannel.Handler", [2], 16, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export async function HandlerFunc_Handle(f: HandlerFunc | null, ctx: context.Context | null, call: __goscript_inbound.InboundCall | $.VarRef<__goscript_inbound.InboundCall> | null): globalThis.Promise<void> {
	void (__goscriptAwait = f!(ctx, call), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
}

export async function ErrorHandlerFunc_Handle(f: ErrorHandlerFunc | null, ctx: context.Context | null, call: __goscript_inbound.InboundCall | $.VarRef<__goscript_inbound.InboundCall> | null): globalThis.Promise<void> {
	{
		let err = (__goscriptAwait = f!(ctx, call), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (err != null) {
			if (__goscript_errors.GetSystemErrorCode(err) == 5) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>($.pointerValue<__goscript_inbound.InboundCall>(call).reqResReader.log).WithFields((ErrorHandlerFunc_getLogFields(f) as $.Slice<__goscript_logger.LogField>)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).WithFields($.arrayToSlice<__goscript_logger.LogField>([await __goscript_logger.ErrField(err)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Error("Unexpected handler error"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			await __goscript_inbound.InboundCallResponse.prototype.SendSystemError.call((call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? ((call as any) as __goscript_inbound.InboundCall).Response() : __goscript_inbound.InboundCall.prototype.Response.call(call)), err)
		}
	}
}

export function ErrorHandlerFunc_getLogFields(f: ErrorHandlerFunc | null): __goscript_logger.LogFields {
	let ptr = $.markAsStructValue($.cloneStructValue(reflect.ValueOf($.namedValueInterfaceValue<any>(f, "tchannel.ErrorHandlerFunc", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))).Pointer()
	let handlerFunc: runtime.Func | $.VarRef<runtime.Func> | null = runtime.FuncForPC(ptr)
	let [fileName, fileLine] = runtime.Func.prototype.FileLine.call($.pointerValue<runtime.Func>(handlerFunc), ptr)
	return ($.arrayToSlice<__goscript_logger.LogField>([(() => { const __goscriptLiteralField0 = runtime.Func.prototype.Name.call($.pointerValueOrNil(handlerFunc)); return new __goscript_logger.LogField({Key: "handlerFuncName", Value: __goscriptLiteralField0}, true) })(), new __goscript_logger.LogField({Key: "handlerFuncFileName", Value: fileName}, true), new __goscript_logger.LogField({Key: "handlerFuncFileLine", Value: $.basicInterfaceValue(fileLine, "int")}, true)]) as __goscript_logger.LogFields)
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Handle: (receiver: any, ...args: any[]) => (ErrorHandlerFunc_Handle as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), getLogFields: (receiver: any, ...args: any[]) => (ErrorHandlerFunc_getLogFields as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (({ kind: $.TypeKind.Function, name: "tchannel.ErrorHandlerFunc", params: ["context.Context", /* @__PURE__ */ $.pointerType("tchannel.InboundCall")], results: ["error"] } as $.FunctionTypeInfo))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Handle", [["ctx", "context.Context"], ["call", /* @__PURE__ */ $.pointerType("tchannel.InboundCall")]]), $.methodSignature("getLogFields", [], [/* @__PURE__ */ $.sliceType("tchannel.LogField", "tchannel.LogFields")])])
}

var __goscriptAwait: any
