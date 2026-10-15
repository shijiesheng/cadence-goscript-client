// Generated file based on peer_strategies.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

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
import "@goscript/math/index.js"
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

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.ScoreCalculator", "tchannel.ScoreCalculatorFunc", "tchannel.zeroCalculator", "tchannel.leastPendingCalculator", "tchannel.preferIncomingCalculator"])

export type ScoreCalculator = {
	GetScore(p: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null): bigint | globalThis.Promise<bigint>
}

$.registerInterfaceType(
	"tchannel.ScoreCalculator",
	null,
	[$.methodSignature("GetScore", [["p", /* @__PURE__ */ $.pointerType("tchannel.Peer")]], [/* @__PURE__ */ $.basicType("uint64")])]
);

export type ScoreCalculatorFunc = ((p: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null) => bigint | globalThis.Promise<bigint>) | null

$.registerNamedValueType(
	"tchannel.ScoreCalculatorFunc",
	{GetScore: (receiver: any, ...args: any[]) => (ScoreCalculatorFunc_GetScore as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GetScore", [["p", /* @__PURE__ */ $.pointerType("tchannel.Peer")]], [/* @__PURE__ */ $.basicType("uint64")])]
);

$.registerNamedValueType(
	"*tchannel.ScoreCalculatorFunc",
	{GetScore: (receiver: any, ...args: any[]) => (ScoreCalculatorFunc_GetScore as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("GetScore", [["p", /* @__PURE__ */ $.pointerType("tchannel.Peer")]], [/* @__PURE__ */ $.basicType("uint64")])]
);

export class zeroCalculator {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): zeroCalculator {
		return new zeroCalculator(this, true)
	}

	public __goscriptAssign(source: zeroCalculator): void {
	}

	public GetScore(p: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null): bigint {
		return 0n
	}

	static __typeInfo = $.registerStructType(
		"tchannel.zeroCalculator",
		() => new zeroCalculator(),
		() => [$.methodSignature("GetScore", [["p", /* @__PURE__ */ $.pointerType("tchannel.Peer")]], [/* @__PURE__ */ $.basicType("uint64")])],
		zeroCalculator,
		() => []
	)
}

export class leastPendingCalculator {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): leastPendingCalculator {
		return new leastPendingCalculator(this, true)
	}

	public __goscriptAssign(source: leastPendingCalculator): void {
	}

	public async GetScore(p: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null): globalThis.Promise<bigint> {
		let [inbound, outbound] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as __goscript_peer.Peer).NumConnections() : __goscript_peer.Peer.prototype.NumConnections.call(p))
		if ((inbound + outbound) == 0) {
			return 18446744073709551615n
		}

		return $.uint64(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as __goscript_peer.Peer).NumPendingOutbound() : __goscript_peer.Peer.prototype.NumPendingOutbound.call(p)))
	}

	static __typeInfo = $.registerStructType(
		"tchannel.leastPendingCalculator",
		() => new leastPendingCalculator(),
		() => [$.methodSignature("GetScore", [["p", /* @__PURE__ */ $.pointerType("tchannel.Peer")]], [/* @__PURE__ */ $.basicType("uint64")])],
		leastPendingCalculator,
		() => []
	)
}

export class preferIncomingCalculator {
	public _fields: {
	}

	constructor(init?: Partial<{}>, __goscriptValue?: boolean) {
		this._fields = {
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): preferIncomingCalculator {
		return new preferIncomingCalculator(this, true)
	}

	public __goscriptAssign(source: preferIncomingCalculator): void {
	}

	public async GetScore(p: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null): globalThis.Promise<bigint> {
		let [inbound, outbound] = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as __goscript_peer.Peer).NumConnections() : __goscript_peer.Peer.prototype.NumConnections.call(p))
		if ((inbound + outbound) == 0) {
			return 18446744073709551615n
		}

		let numPendingOutbound = $.uint64(await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? ((p as any) as __goscript_peer.Peer).NumPendingOutbound() : __goscript_peer.Peer.prototype.NumPendingOutbound.call(p)))
		if (inbound == 0) {
			return $.uint64Add(2147483647n, numPendingOutbound)
		}

		return numPendingOutbound
	}

	static __typeInfo = $.registerStructType(
		"tchannel.preferIncomingCalculator",
		() => new preferIncomingCalculator(),
		() => [$.methodSignature("GetScore", [["p", /* @__PURE__ */ $.pointerType("tchannel.Peer")]], [/* @__PURE__ */ $.basicType("uint64")])],
		preferIncomingCalculator,
		() => []
	)
}

export async function ScoreCalculatorFunc_GetScore(f: ScoreCalculatorFunc | null, p: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null): globalThis.Promise<bigint> {
	return f!(p)
}

export function newZeroCalculator(): zeroCalculator {
	return new zeroCalculator(undefined, true)
}

export function newLeastPendingCalculator(): leastPendingCalculator {
	return new leastPendingCalculator(undefined, true)
}

export function newPreferIncomingCalculator(): preferIncomingCalculator {
	return new preferIncomingCalculator(undefined, true)
}

var __goscriptAwait: any
