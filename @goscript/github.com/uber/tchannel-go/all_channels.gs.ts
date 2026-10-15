// Generated file based on all_channels.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as sync from "@goscript/sync/index.js"

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

import * as __goscript_fragmenting_reader from "./fragmenting_reader.gs.ts"

import * as __goscript_fragmenting_writer from "./fragmenting_writer.gs.ts"

import * as __goscript_frame from "./frame.gs.ts"

import * as __goscript_frame_pool from "./frame_pool.gs.ts"

import * as __goscript_handlers from "./handlers.gs.ts"

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

import * as __goscript_tracing from "./tracing.gs.ts"
import "@goscript/fmt/index.js"
import "@goscript/sync/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber/tchannel-go/relay/index.js"
import "@goscript/github.com/uber/tchannel-go/tos/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/golang.org/x/net/context/index.js"
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

export var channelMap: $.VarRef<{"Mutex": sync.Mutex, "existing": globalThis.Map<string, $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>> | null}>

export function __goscript_init_channelMap(): void {
	if (((channelMap) as any) === undefined) {
		channelMap = $.varRef($.anonymousStructValue({Mutex: ($.markAsStructValue(new sync.Mutex()) as sync.Mutex), existing: $.makeMap<string, $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>>()}, { kind: $.TypeKind.Struct, methods: [], fields: [/* @__PURE__ */ $.structField("Mutex", "sync.Mutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("existing", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.pointerType("tchannel.Channel"))), [1], 8, false, { pkgPath: "github.com/uber/tchannel-go" })] }))
	}
}

export function __goscript_get_channelMap(): $.VarRef<{"Mutex": sync.Mutex, "existing": globalThis.Map<string, $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>> | null}> {
	if (((channelMap) as any) === undefined) {
		__goscript_init_channelMap()
	}
	return channelMap
}

export function __goscript_set_channelMap(__goscriptValue: {"Mutex": sync.Mutex, "existing": globalThis.Map<string, $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>> | null}): void {
	$.assignStruct(__goscript_get_channelMap().value, __goscriptValue)
}

export async function registerNewChannel(ch: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	const ch$: __goscript_channel.Channel = ch == null ? $.pointerTarget<__goscript_channel.Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<__goscript_channel.Channel>(ch)
	let serviceName = await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as __goscript_channel.Channel).ServiceName() : __goscript_channel.Channel.prototype.ServiceName.call(ch));
	;(ch$ as __goscript_channel.Channel).createdStack = $.bytesToString(__goscript_introspection.getStacks(false))
	void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((ch$ as __goscript_channel.Channel).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([(await (async () => { const __goscriptLiteralField0 = await fmt.Sprintf("%p", $.interfaceValue(ch, "*tchannel.Channel", /* @__PURE__ */ $.pointerType("tchannel.Channel"))); return new __goscript_logger.LogField({Key: "channelPtr", Value: __goscriptLiteralField0}, true) })()), new __goscript_logger.LogField({Key: "createdStack", Value: (ch$ as __goscript_channel.Channel).createdStack}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Info("Created new channel."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

	await $.pointerValue<{"Mutex": sync.Mutex, "existing": globalThis.Map<string, $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>> | null}>(__goscript_get_channelMap()).Mutex.Lock()
	const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<{"Mutex": sync.Mutex, "existing": globalThis.Map<string, $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>> | null}>(__goscript_get_channelMap()).Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee0() })

	let existing: $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null> = $.mapGet<string, $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>, $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>>($.pointerValue<{"Mutex": sync.Mutex, "existing": globalThis.Map<string, $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>> | null}>(__goscript_get_channelMap()).existing, serviceName, null)[0]
	$.mapSet($.pointerValue<{"Mutex": sync.Mutex, "existing": globalThis.Map<string, $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>> | null}>(__goscript_get_channelMap()).existing, serviceName, $.appendOne(existing, ch, $.appendZeros.nil))
}

export async function removeClosedChannel(ch: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null): globalThis.Promise<void> {
	using __defer = new $.DisposableStack()
	await $.pointerValue<{"Mutex": sync.Mutex, "existing": globalThis.Map<string, $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>> | null}>(__goscript_get_channelMap()).Mutex.Lock()
	const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<{"Mutex": sync.Mutex, "existing": globalThis.Map<string, $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>> | null}>(__goscript_get_channelMap()).Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee1() })

	let channels: $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null> = $.mapGet<string, $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>, $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>>($.pointerValue<{"Mutex": sync.Mutex, "existing": globalThis.Map<string, $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>> | null}>(__goscript_get_channelMap()).existing, await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as __goscript_channel.Channel).ServiceName() : __goscript_channel.Channel.prototype.ServiceName.call(ch)), null)[0]
	for (let __goscriptRangeTarget0 = channels, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), i = 0; i < __goscriptRangeWindow0.length; i++) {
		let v = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + i] as __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null)
		if (!$.pointerEqual(v, ch)) {
			continue
		}

		// Replace current index with the last element, and truncate channels.
		$.sliceElems(channels!)[$.sliceSlot(channels!, i)] = $.arrayIndex(channels!, $.sliceLen(channels) - 1)
		channels = $.goSlice(channels, undefined, $.sliceLen(channels) - 1)
		break
	}

	$.mapSet($.pointerValue<{"Mutex": sync.Mutex, "existing": globalThis.Map<string, $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>> | null}>(__goscript_get_channelMap()).existing, await (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as __goscript_channel.Channel).ServiceName() : __goscript_channel.Channel.prototype.ServiceName.call(ch)), channels)
}

export async function findChannelByID(id: number): globalThis.Promise<[__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null, boolean]> {
	using __defer = new $.DisposableStack()
	await $.pointerValue<{"Mutex": sync.Mutex, "existing": globalThis.Map<string, $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>> | null}>(__goscript_get_channelMap()).Mutex.Lock()
	const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())($.pointerValue<{"Mutex": sync.Mutex, "existing": globalThis.Map<string, $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>> | null}>(__goscript_get_channelMap()).Mutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
	__defer.defer(() => { __goscriptDeferCallee2() })

	for (const [__rangeKey, channels] of $.pointerValue<{"Mutex": sync.Mutex, "existing": globalThis.Map<string, $.Slice<__goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null>> | null}>(__goscript_get_channelMap()).existing?.entries() ?? []) {
		for (let __goscriptRangeTarget1 = channels, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow1.length; __rangeIndex++) {
			let ch = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + __rangeIndex] as __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null)
			if ($.pointerValue<__goscript_channel.Channel>(ch).chID == id) {
				return [ch, true]
			}
		}
	}

	return [null, false]
}

var __goscriptAwait: any
