// Generated file based on idle_sweep.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as context from "@goscript/context/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as relay from "@goscript/github.com/uber/tchannel-go/relay/index.js"

import type * as arg2 from "@goscript/github.com/uber/tchannel-go/thrift/arg2/index.js"

import * as tos from "@goscript/github.com/uber/tchannel-go/tos/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as context2 from "@goscript/golang.org/x/net/context/index.js"

import type * as io from "@goscript/io/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as syscall from "@goscript/syscall/index.js"

import type * as __goscript__arguments from "./arguments.gs.ts"

import * as __goscript_calloptions from "./calloptions.gs.ts"

import * as __goscript_channel from "./channel.gs.ts"

import type * as __goscript_channelstate_string from "./channelstate_string.gs.ts"

import * as __goscript_checksum from "./checksum.gs.ts"

import * as __goscript_connection from "./connection.gs.ts"

import * as __goscript_connection_direction from "./connection_direction.gs.ts"

import * as __goscript_connectionstate_string from "./connectionstate_string.gs.ts"

import * as __goscript_fragmenting_reader from "./fragmenting_reader.gs.ts"

import * as __goscript_fragmenting_writer from "./fragmenting_writer.gs.ts"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_frame_pool from "./frame_pool.gs.ts"

import * as __goscript_handlers from "./handlers.gs.ts"

import * as __goscript_health from "./health.gs.ts"

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

import * as __goscript_tracing from "./tracing.gs.ts"
import "@goscript/time/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber/tchannel-go/relay/index.js"
import "@goscript/github.com/uber/tchannel-go/tos/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/syscall/index.js"
import "./calloptions.gs.ts"
import "./channel.gs.ts"
import "./checksum.gs.ts"
import "./connection.gs.ts"
import "./connection_direction.gs.ts"
import "./connectionstate_string.gs.ts"
import "./fragmenting_reader.gs.ts"
import "./fragmenting_writer.gs.ts"
import "./frame.gs.ts"
import "./frame_pool.gs.ts"
import "./handlers.gs.ts"
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

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.idleSweep"])

export class idleSweep {
	public get ch(): __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null {
		return this._fields.ch
	}

	public set ch(value: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null) {
		this._fields.ch = value
	}

	public get maxIdleTime(): time.Duration {
		return this._fields.maxIdleTime
	}

	public set maxIdleTime(value: time.Duration) {
		this._fields.maxIdleTime = value
	}

	public get idleCheckInterval(): time.Duration {
		return this._fields.idleCheckInterval
	}

	public set idleCheckInterval(value: time.Duration) {
		this._fields.idleCheckInterval = value
	}

	public get stopCh(): $.Channel<{}> | null {
		return this._fields.stopCh
	}

	public set stopCh(value: $.Channel<{}> | null) {
		this._fields.stopCh = value
	}

	public get started(): boolean {
		return this._fields.started
	}

	public set started(value: boolean) {
		this._fields.started = value
	}

	public _fields: {
		ch: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null
		maxIdleTime: time.Duration
		idleCheckInterval: time.Duration
		stopCh: $.Channel<{}> | null
		started: boolean
	}

	constructor(init?: Partial<{ch?: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null, maxIdleTime?: time.Duration, idleCheckInterval?: time.Duration, stopCh?: $.Channel<{}> | null, started?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			ch: init?.ch ?? (null! as __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null),
			maxIdleTime: init?.maxIdleTime ?? (0n as time.Duration),
			idleCheckInterval: init?.idleCheckInterval ?? (0n as time.Duration),
			stopCh: init?.stopCh ?? (null! as $.Channel<{}> | null),
			started: init?.started ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): idleSweep {
		return new idleSweep(this, true)
	}

	public __goscriptAssign(source: idleSweep): void {
		const target = this._fields
		const values = source._fields
		target.ch = values.ch
		target.maxIdleTime = values.maxIdleTime
		target.idleCheckInterval = values.idleCheckInterval
		target.stopCh = values.stopCh
		target.started = values.started
	}

	public async Stop(): globalThis.Promise<void> {
		let _is: idleSweep | $.VarRef<idleSweep> | null = this;
		const _is$: idleSweep = _is == null ? $.pointerTarget<idleSweep>(_is) : (_is as any).__isVarRef === true ? (_is as any).value : (_is as any).__goValue === undefined ? (_is as any) : $.pointerTarget<idleSweep>(_is)
		if (!(_is$ as idleSweep).started) {
			return
		}

		;(_is$ as idleSweep).started = false
		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>($.pointerValue<__goscript_channel.Channel>((_is$ as idleSweep).ch).channelConnectionCommon.log).Info("Stopping idle connections poller."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		void (_is$ as idleSweep).stopCh!.close()
	}

	public async checkIdleConnections(): globalThis.Promise<void> {
		const _is: idleSweep | $.VarRef<idleSweep> | null = this;
		const _is$: idleSweep = _is == null ? $.pointerTarget<idleSweep>(_is) : (_is as any).__isVarRef === true ? (_is as any).value : (_is as any).__goValue === undefined ? (_is as any) : $.pointerTarget<idleSweep>(_is)
		let now = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<__goscript_channel.Channel>((_is$ as idleSweep).ch).channelConnectionCommon.timeNow!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time)))

		// Acquire the read lock and examine which connections are idle.
		let idleConnections: $.Slice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null> = $.makeSlice<__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null>(0, 10)
		await $.pointerValue<__goscript_channel.Channel>((_is$ as idleSweep).ch).mutable.RWMutex.RLock()
		for (const [__rangeKey, conn] of $.pointerValue<__goscript_channel.Channel>((_is$ as idleSweep).ch).mutable.conns?.entries() ?? []) {
			let lastActivityTime = (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as __goscript_connection.Connection).getLastActivityReadTime() : __goscript_connection.Connection.prototype.getLastActivityReadTime.call(conn))
			{
				let sendActivityTime = (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as __goscript_connection.Connection).getLastActivityWriteTime() : __goscript_connection.Connection.prototype.getLastActivityWriteTime.call(conn))
				if ($.markAsStructValue($.cloneStructValue(lastActivityTime)).Before($.markAsStructValue($.cloneStructValue(sendActivityTime)))) {
					lastActivityTime = $.assignStruct(lastActivityTime, sendActivityTime)
				}
			}

			{
				let idleTime = $.markAsStructValue($.cloneStructValue(now)).Sub($.markAsStructValue($.cloneStructValue(lastActivityTime)))
				if (idleTime >= (_is$ as idleSweep).maxIdleTime) {
					idleConnections = $.appendOne(idleConnections, conn, $.appendZeros.nil)
				}
			}
		}
		$.pointerValue<__goscript_channel.Channel>((_is$ as idleSweep).ch).mutable.RWMutex.RUnlock()

		for (let __goscriptRangeTarget0 = idleConnections, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
			let conn = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null)
			// It's possible that the connection is already closed when we get here.
			if (!await (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as __goscript_connection.Connection).IsActive() : __goscript_connection.Connection.prototype.IsActive.call(conn))) {
				continue
			}

			// We shouldn't get to a state where we have pending calls, but the connection
			// is idle. This either means the max-idle time is too low, or there's a stuck call.
			if (await (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as __goscript_connection.Connection).hasPendingCalls() : __goscript_connection.Connection.prototype.hasPendingCalls.call(conn))) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>($.pointerValue<__goscript_connection.Connection>(conn).channelConnectionCommon.log).Error("Skip closing idle Connection as it has pending calls."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				continue
			}

			await __goscript_connection.Connection.prototype.close.call(conn, $.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "reason", Value: "Idle connection closed"}, true), (() => { const __goscriptLiteralField0 = $.interfaceValue((conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as __goscript_connection.Connection).getLastActivityReadTime() : __goscript_connection.Connection.prototype.getLastActivityReadTime.call(conn)), "time.Time", "time.Time"); return new __goscript_logger.LogField({Key: "lastActivityTimeRead", Value: __goscriptLiteralField0}, true) })(), (() => { const __goscriptLiteralField1 = $.interfaceValue((conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as __goscript_connection.Connection).getLastActivityWriteTime() : __goscript_connection.Connection.prototype.getLastActivityWriteTime.call(conn)), "time.Time", "time.Time"); return new __goscript_logger.LogField({Key: "lastActivityTimeWrite", Value: __goscriptLiteralField1}, true) })()]))
		}
	}

	public async pollerLoop(): globalThis.Promise<void> {
		const _is: idleSweep | $.VarRef<idleSweep> | null = this;
		const _is$: idleSweep = _is == null ? $.pointerTarget<idleSweep>(_is) : (_is as any).__isVarRef === true ? (_is as any).value : (_is as any).__goValue === undefined ? (_is as any) : $.pointerTarget<idleSweep>(_is)
		let ticker: time.Ticker | $.VarRef<time.Ticker> | null = ((__goscriptAwait = $.pointerValue<__goscript_channel.Channel>((_is$ as idleSweep).ch).channelConnectionCommon.timeTicker!((_is$ as idleSweep).idleCheckInterval), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Ticker | $.VarRef<time.Ticker> | null)

		while (true) {
			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: $.pointerValue<time.Ticker>(ticker).C,
					onSelected: async (__goscriptSelect0Result) => {
						await (_is !== null && (_is as any).__isVarRef !== true && (_is as any).__goValue === undefined ? ((_is as any) as idleSweep).checkIdleConnections() : idleSweep.prototype.checkIdleConnections.call(_is))
					}
				},
				{
					id: 1,
					isSend: false,
					channel: (_is$ as idleSweep).stopCh,
					onSelected: async (__goscriptSelect0Result) => {
						time.Ticker.prototype.Stop.call($.pointerValue<time.Ticker>(ticker))
						return $.selectVoidReturn()
					}
				}
			], false)
			if (__goscriptSelect0HasReturn) {
				return __goscriptSelect0Value
			}
		}
	}

	public async start(): globalThis.Promise<void> {
		let _is: idleSweep | $.VarRef<idleSweep> | null = this;
		const _is$: idleSweep = _is == null ? $.pointerTarget<idleSweep>(_is) : (_is as any).__isVarRef === true ? (_is as any).value : (_is as any).__goValue === undefined ? (_is as any) : $.pointerTarget<idleSweep>(_is)
		if ((_is$ as idleSweep).started || ((_is$ as idleSweep).idleCheckInterval <= 0n)) {
			return
		}

		void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>($.pointerValue<__goscript_channel.Channel>((_is$ as idleSweep).ch).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "idleCheckInterval", Value: $.namedValueInterfaceValue<any>((_is$ as idleSweep).idleCheckInterval, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())}, true), new __goscript_logger.LogField({Key: "maxIdleTime", Value: $.namedValueInterfaceValue<any>((_is$ as idleSweep).maxIdleTime, "time.Duration", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Info("Starting idle connections poller."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait);

		;(_is$ as idleSweep).started = true;
		;(_is$ as idleSweep).stopCh = $.makeChannel<{}>(0, {}, "both")
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.pollerLoop())((_is$ as idleSweep)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*idleSweep).pollerLoop-fm")
		queueMicrotask(async () => { await __goscriptDeferCallee0() })
	}

	static __typeInfo = $.registerStructType(
		"tchannel.idleSweep",
		() => new idleSweep(),
		() => [$.methodSignature("Stop", [], [], true), $.methodSignature("checkIdleConnections", [], [], true), $.methodSignature("pollerLoop", [], [], true), $.methodSignature("start", [], [], true)],
		idleSweep,
		() => [/* @__PURE__ */ $.structField("ch", /* @__PURE__ */ $.pointerType("tchannel.Channel"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("maxIdleTime", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("idleCheckInterval", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 16, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("stopCh", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [3], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("started", /* @__PURE__ */ $.basicType("bool"), [4], 32, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export async function startIdleSweep(ch: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null, opts: __goscript_channel.ChannelOptions | $.VarRef<__goscript_channel.ChannelOptions> | null): globalThis.Promise<idleSweep | $.VarRef<idleSweep> | null> {
	const opts$: __goscript_channel.ChannelOptions = opts == null ? $.pointerTarget<__goscript_channel.ChannelOptions>(opts) : (opts as any).__isVarRef === true ? (opts as any).value : (opts as any).__goValue === undefined ? (opts as any) : $.pointerTarget<__goscript_channel.ChannelOptions>(opts)
	let _is: idleSweep | $.VarRef<idleSweep> | null = new idleSweep({ch: ch, maxIdleTime: (opts$ as __goscript_channel.ChannelOptions).MaxIdleTime, idleCheckInterval: (opts$ as __goscript_channel.ChannelOptions).IdleCheckInterval})

	await (_is !== null && (_is as any).__isVarRef !== true && (_is as any).__goValue === undefined ? ((_is as any) as idleSweep).start() : idleSweep.prototype.start.call(_is))
	return _is
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptAwait: any
