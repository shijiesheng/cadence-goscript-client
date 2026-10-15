// Generated file based on relay_timer_pool.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as math from "@goscript/math/index.js"

import * as sync from "@goscript/sync/index.js"

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
import "@goscript/sync/index.js"
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

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.relayTimerTrigger", "tchannel.relayTimerPool", "tchannel.relayTimer"])

export type relayTimerTrigger = ((items: __goscript_relay.relayItems | $.VarRef<__goscript_relay.relayItems> | null, id: number, isOriginator: boolean) => void) | null

export class relayTimerPool {
	public get pool(): sync.Pool {
		return this._fields.pool
	}

	public set pool(value: sync.Pool) {
		this._fields.pool = value
	}

	public get trigger(): ((items: __goscript_relay.relayItems | $.VarRef<__goscript_relay.relayItems> | null, id: number, isOriginator: boolean) => void) | null {
		return this._fields.trigger
	}

	public set trigger(value: ((items: __goscript_relay.relayItems | $.VarRef<__goscript_relay.relayItems> | null, id: number, isOriginator: boolean) => void) | null) {
		this._fields.trigger = value
	}

	public get verify(): boolean {
		return this._fields.verify
	}

	public set verify(value: boolean) {
		this._fields.verify = value
	}

	public _fields: {
		pool: sync.Pool
		trigger: ((items: __goscript_relay.relayItems | $.VarRef<__goscript_relay.relayItems> | null, id: number, isOriginator: boolean) => void) | null
		verify: boolean
	}

	constructor(init?: Partial<{pool?: sync.Pool, trigger?: ((items: __goscript_relay.relayItems | $.VarRef<__goscript_relay.relayItems> | null, id: number, isOriginator: boolean) => void) | null, verify?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			pool: init?.pool ? $.markAsStructValue($.cloneStructValue(init.pool)) : $.markAsStructValue(new sync.Pool()),
			trigger: init?.trigger ?? (null! as ((items: __goscript_relay.relayItems | $.VarRef<__goscript_relay.relayItems> | null, id: number, isOriginator: boolean) => void) | null),
			verify: init?.verify ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): relayTimerPool {
		return new relayTimerPool(this, true)
	}

	public __goscriptAssign(source: relayTimerPool): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.pool, values.pool)
		target.trigger = values.trigger
		target.verify = values.verify
	}

	public async Get(): globalThis.Promise<relayTimer | $.VarRef<relayTimer> | null> {
		const tp: relayTimerPool | $.VarRef<relayTimerPool> | null = this;
		let __goscriptTuple0: any = $.typeAssertTuple<relayTimer | $.VarRef<relayTimer> | null>(await $.pointerValue<relayTimerPool>(tp).pool.Get(), /* @__PURE__ */ $.pointerType("tchannel.relayTimer"))
		let timer: relayTimer | $.VarRef<relayTimer> | null = __goscriptTuple0[0]
		let ok = __goscriptTuple0[1]
		if (ok) {
			$.pointerValue<relayTimer>(timer).released = false
			return timer
		}

		let rt: relayTimer | $.VarRef<relayTimer> | null = new relayTimer({pool: tp})
		let rt$: relayTimer = rt == null ? $.pointerTarget<relayTimer>(rt) : (rt as any).__isVarRef === true ? (rt as any).value : (rt as any).__goValue === undefined ? (rt as any) : $.pointerTarget<relayTimer>(rt);
		// Go timers are started by default. However, we need to separate creating
		// the timer and starting the timer for use in the relay code paths.
		// To make this work without more locks in the relayTimer, we create a Go timer
		// with a huge timeout so it doesn't run, then stop it so we can start it later.
		;(rt$ as relayTimer).timer = time.AfterFunc(9223372036854775807n, $.functionValue(((__receiver) => () => __receiver.OnTimer())((rt$ as relayTimer)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*relayTimer).OnTimer-fm"))
		if (!time.Timer.prototype.Stop.call($.pointerValue<time.Timer>((rt$ as relayTimer).timer))) {
			$.panic("relayTimer requires timers in stopped state, but failed to stop underlying timer")
		}
		return rt
	}

	public Put(rt: relayTimer | $.VarRef<relayTimer> | null): void {
		const tp: relayTimerPool | $.VarRef<relayTimerPool> | null = this;
		const tp$: relayTimerPool = tp == null ? $.pointerTarget<relayTimerPool>(tp) : (tp as any).__isVarRef === true ? (tp as any).value : (tp as any).__goValue === undefined ? (tp as any) : $.pointerTarget<relayTimerPool>(tp)
		if ((tp$ as relayTimerPool).verify) {
			// If we are trying to verify correct pool behavior, then we don't release
			// the timer, and instead ensure no methods are called after being released.
			return
		}
		void (tp$ as relayTimerPool).pool.Put($.interfaceValue(rt, "*tchannel.relayTimer", /* @__PURE__ */ $.pointerType("tchannel.relayTimer")))
	}

	static __typeInfo = $.registerStructType(
		"tchannel.relayTimerPool",
		() => new relayTimerPool(),
		() => [$.methodSignature("Get", [], [/* @__PURE__ */ $.pointerType("tchannel.relayTimer")], true), $.methodSignature("Put", [["rt", /* @__PURE__ */ $.pointerType("tchannel.relayTimer")]], [], true)],
		relayTimerPool,
		() => [/* @__PURE__ */ $.structField("pool", "sync.Pool", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("trigger", ({ kind: $.TypeKind.Function, name: "tchannel.relayTimerTrigger", params: [/* @__PURE__ */ $.pointerType("tchannel.relayItems"), /* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.basicType("bool")], results: [] } as $.FunctionTypeInfo), [1], 40, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("verify", /* @__PURE__ */ $.basicType("bool"), [2], 48, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class relayTimer {
	public get pool(): relayTimerPool | $.VarRef<relayTimerPool> | null {
		return this._fields.pool
	}

	public set pool(value: relayTimerPool | $.VarRef<relayTimerPool> | null) {
		this._fields.pool = value
	}

	public get timer(): time.Timer | $.VarRef<time.Timer> | null {
		return this._fields.timer
	}

	public set timer(value: time.Timer | $.VarRef<time.Timer> | null) {
		this._fields.timer = value
	}

	public get active(): boolean {
		return this._fields.active
	}

	public set active(value: boolean) {
		this._fields.active = value
	}

	public get stopped(): boolean {
		return this._fields.stopped
	}

	public set stopped(value: boolean) {
		this._fields.stopped = value
	}

	public get released(): boolean {
		return this._fields.released
	}

	public set released(value: boolean) {
		this._fields.released = value
	}

	// Per-timer parameters passed back when the timer is triggered.
	public get items(): __goscript_relay.relayItems | $.VarRef<__goscript_relay.relayItems> | null {
		return this._fields.items
	}

	public set items(value: __goscript_relay.relayItems | $.VarRef<__goscript_relay.relayItems> | null) {
		this._fields.items = value
	}

	public get id(): number {
		return this._fields.id
	}

	public set id(value: number) {
		this._fields.id = value
	}

	public get isOriginator(): boolean {
		return this._fields.isOriginator
	}

	public set isOriginator(value: boolean) {
		this._fields.isOriginator = value
	}

	public _fields: {
		pool: relayTimerPool | $.VarRef<relayTimerPool> | null
		timer: time.Timer | $.VarRef<time.Timer> | null
		active: boolean
		stopped: boolean
		released: boolean
		items: __goscript_relay.relayItems | $.VarRef<__goscript_relay.relayItems> | null
		id: number
		isOriginator: boolean
	}

	constructor(init?: Partial<{pool?: relayTimerPool | $.VarRef<relayTimerPool> | null, timer?: time.Timer | $.VarRef<time.Timer> | null, active?: boolean, stopped?: boolean, released?: boolean, items?: __goscript_relay.relayItems | $.VarRef<__goscript_relay.relayItems> | null, id?: number, isOriginator?: boolean}>, __goscriptValue?: boolean) {
		this._fields = {
			pool: init?.pool ?? (null! as relayTimerPool | $.VarRef<relayTimerPool> | null),
			timer: init?.timer ?? (null! as time.Timer | $.VarRef<time.Timer> | null),
			active: init?.active ?? (false as boolean),
			stopped: init?.stopped ?? (false as boolean),
			released: init?.released ?? (false as boolean),
			items: init?.items ?? (null! as __goscript_relay.relayItems | $.VarRef<__goscript_relay.relayItems> | null),
			id: init?.id ?? (0 as number),
			isOriginator: init?.isOriginator ?? (false as boolean)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): relayTimer {
		return new relayTimer(this, true)
	}

	public __goscriptAssign(source: relayTimer): void {
		const target = this._fields
		const values = source._fields
		target.pool = values.pool
		target.timer = values.timer
		target.active = values.active
		target.stopped = values.stopped
		target.released = values.released
		target.items = values.items
		target.id = values.id
		target.isOriginator = values.isOriginator
	}

	public async OnTimer(): globalThis.Promise<void> {
		const rt: relayTimer | $.VarRef<relayTimer> | null = this;
		const rt$: relayTimer = rt == null ? $.pointerTarget<relayTimer>(rt) : (rt as any).__isVarRef === true ? (rt as any).value : (rt as any).__goValue === undefined ? (rt as any) : $.pointerTarget<relayTimer>(rt)
		void (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? ((rt as any) as relayTimer).verifyNotReleased() : relayTimer.prototype.verifyNotReleased.call(rt))
		let items: __goscript_relay.relayItems | $.VarRef<__goscript_relay.relayItems> | null = (rt$ as relayTimer).items
		let id = (rt$ as relayTimer).id
		let isOriginator = (rt$ as relayTimer).isOriginator
		void (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? ((rt as any) as relayTimer).markTimerInactive() : relayTimer.prototype.markTimerInactive.call(rt))
		void (__goscriptAwait = $.pointerValue<relayTimerPool>((rt$ as relayTimer).pool).trigger!(items, id, isOriginator), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public Release(): void {
		let rt: relayTimer | $.VarRef<relayTimer> | null = this;
		const rt$: relayTimer = rt == null ? $.pointerTarget<relayTimer>(rt) : (rt as any).__isVarRef === true ? (rt as any).value : (rt as any).__goValue === undefined ? (rt as any) : $.pointerTarget<relayTimer>(rt)
		void (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? ((rt as any) as relayTimer).verifyNotReleased() : relayTimer.prototype.verifyNotReleased.call(rt))
		if ((rt$ as relayTimer).active) {
			$.panic("only stopped or completed timers can be released")
		}
		;(rt$ as relayTimer).released = true
		relayTimerPool.prototype.Put.call((rt$ as relayTimer).pool, rt)
	}

	public Start(d: time.Duration, items: __goscript_relay.relayItems | $.VarRef<__goscript_relay.relayItems> | null, id: number, isOriginator: boolean): void {
		let rt: relayTimer | $.VarRef<relayTimer> | null = this;
		const rt$: relayTimer = rt == null ? $.pointerTarget<relayTimer>(rt) : (rt as any).__isVarRef === true ? (rt as any).value : (rt as any).__goValue === undefined ? (rt as any) : $.pointerTarget<relayTimer>(rt)
		void (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? ((rt as any) as relayTimer).verifyNotReleased() : relayTimer.prototype.verifyNotReleased.call(rt))
		if ((rt$ as relayTimer).active) {
			$.panic("Tried to start an already-active timer")
		}

		;(rt$ as relayTimer).active = true;
		;(rt$ as relayTimer).stopped = false;
		;(rt$ as relayTimer).items = items;
		;(rt$ as relayTimer).id = id;
		;(rt$ as relayTimer).isOriginator = isOriginator

		{
			let wasActive = time.Timer.prototype.Reset.call($.pointerValue<time.Timer>((rt$ as relayTimer).timer), d)
			if (wasActive) {
				$.panic("relayTimer's underlying timer was Started multiple times without Stop")
			}
		}
	}

	public Stop(): boolean {
		let rt: relayTimer | $.VarRef<relayTimer> | null = this;
		const rt$: relayTimer = rt == null ? $.pointerTarget<relayTimer>(rt) : (rt as any).__isVarRef === true ? (rt as any).value : (rt as any).__goValue === undefined ? (rt as any) : $.pointerTarget<relayTimer>(rt)
		void (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? ((rt as any) as relayTimer).verifyNotReleased() : relayTimer.prototype.verifyNotReleased.call(rt))

		if ((rt$ as relayTimer).stopped) {
			return true
		}

		let stopped = time.Timer.prototype.Stop.call($.pointerValue<time.Timer>((rt$ as relayTimer).timer))
		if (stopped) {
			;(rt$ as relayTimer).stopped = true
			void (rt !== null && (rt as any).__isVarRef !== true && (rt as any).__goValue === undefined ? ((rt as any) as relayTimer).markTimerInactive() : relayTimer.prototype.markTimerInactive.call(rt))
		}

		return stopped
	}

	public markTimerInactive(): void {
		let rt: relayTimer | $.VarRef<relayTimer> | null = this;
		const rt$: relayTimer = rt == null ? $.pointerTarget<relayTimer>(rt) : (rt as any).__isVarRef === true ? (rt as any).value : (rt as any).__goValue === undefined ? (rt as any) : $.pointerTarget<relayTimer>(rt);
		;(rt$ as relayTimer).active = false;
		;(rt$ as relayTimer).items = null;
		;(rt$ as relayTimer).id = 0;
		;(rt$ as relayTimer).items = null;
		;(rt$ as relayTimer).isOriginator = false
	}

	public verifyNotReleased(): void {
		const rt: relayTimer | $.VarRef<relayTimer> | null = this;
		if ($.pointerValue<relayTimer>(rt).released) {
			$.panic("Released timer cannot be used")
		}
	}

	static __typeInfo = $.registerStructType(
		"tchannel.relayTimer",
		() => new relayTimer(),
		() => [$.methodSignature("OnTimer", [], [], true), $.methodSignature("Release", [], [], true), $.methodSignature("Start", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["items", /* @__PURE__ */ $.pointerType("tchannel.relayItems")], ["id", /* @__PURE__ */ $.basicType("uint32")], ["isOriginator", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("markTimerInactive", [], [], true), $.methodSignature("verifyNotReleased", [], [], true)],
		relayTimer,
		() => [/* @__PURE__ */ $.structField("pool", /* @__PURE__ */ $.pointerType("tchannel.relayTimerPool"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("timer", /* @__PURE__ */ $.pointerType("time.Timer"), [1], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("active", /* @__PURE__ */ $.basicType("bool"), [2], 16, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("stopped", /* @__PURE__ */ $.basicType("bool"), [3], 17, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("released", /* @__PURE__ */ $.basicType("bool"), [4], 18, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("items", /* @__PURE__ */ $.pointerType("tchannel.relayItems"), [5], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("id", /* @__PURE__ */ $.basicType("uint32"), [6], 32, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("isOriginator", /* @__PURE__ */ $.basicType("bool"), [7], 36, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export async function newRelayTimerPool(trigger: ((items: __goscript_relay.relayItems | $.VarRef<__goscript_relay.relayItems> | null, id: number, isOriginator: boolean) => void) | null, verify: boolean): globalThis.Promise<relayTimerPool | $.VarRef<relayTimerPool> | null> {
	return new relayTimerPool({trigger: trigger, verify: verify})
}

var __goscriptAwait: any
