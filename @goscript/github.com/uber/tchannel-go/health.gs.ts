// Generated file based on health.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

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

import * as __goscript_handlers from "./handlers.gs.ts"

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
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
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
import "./handlers.gs.ts"
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

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.HealthCheckOptions", "tchannel.healthHistory"])

export class HealthCheckOptions {
	// The period between health checks. If this is zeor, active health checks
	// are disabled.
	public get Interval(): time.Duration {
		return this._fields.Interval
	}

	public set Interval(value: time.Duration) {
		this._fields.Interval = value
	}

	// The timeout to use for a health check.
	// If no value is specified, it defaults to time.Second.
	public get Timeout(): time.Duration {
		return this._fields.Timeout
	}

	public set Timeout(value: time.Duration) {
		this._fields.Timeout = value
	}

	// FailuresToClose is the number of consecutive health check failures that
	// will cause this connection to be closed.
	// If no value is specified, it defaults to 5.
	public get FailuresToClose(): number {
		return this._fields.FailuresToClose
	}

	public set FailuresToClose(value: number) {
		this._fields.FailuresToClose = value
	}

	public _fields: {
		Interval: time.Duration
		Timeout: time.Duration
		FailuresToClose: number
	}

	constructor(init?: Partial<{Interval?: time.Duration, Timeout?: time.Duration, FailuresToClose?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Interval: init?.Interval ?? (0n as time.Duration),
			Timeout: init?.Timeout ?? (0n as time.Duration),
			FailuresToClose: init?.FailuresToClose ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): HealthCheckOptions {
		return new HealthCheckOptions(this, true)
	}

	public __goscriptAssign(source: HealthCheckOptions): void {
		const target = this._fields
		const values = source._fields
		target.Interval = values.Interval
		target.Timeout = values.Timeout
		target.FailuresToClose = values.FailuresToClose
	}

	public enabled(): boolean {
		const hco = this;
		return hco.Interval > 0n
	}

	public withDefaults(): HealthCheckOptions {
		let hco: HealthCheckOptions = this;
		if (hco.Timeout == 0n) {
			hco.Timeout = 1000000000n
		}
		if (hco.FailuresToClose == 0) {
			hco.FailuresToClose = 5
		}
		return (hco).clone()
	}

	static __typeInfo = $.registerStructType(
		"tchannel.HealthCheckOptions",
		() => new HealthCheckOptions(),
		() => [$.methodSignature("enabled", [], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("withDefaults", [], ["tchannel.HealthCheckOptions"])],
		HealthCheckOptions,
		() => [/* @__PURE__ */ $.structField("Interval", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [0], 0, true), /* @__PURE__ */ $.structField("Timeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 8, true), /* @__PURE__ */ $.structField("FailuresToClose", /* @__PURE__ */ $.basicType("int"), [2], 16, true)]
	)
}

export class healthHistory {
	public get RWMutex(): sync.RWMutex {
		return this._fields.RWMutex
	}

	public set RWMutex(value: sync.RWMutex) {
		this._fields.RWMutex = value
	}

	public get states(): $.Slice<boolean> {
		return this._fields.states
	}

	public set states(value: $.Slice<boolean>) {
		this._fields.states = value
	}

	public get insertAt(): number {
		return this._fields.insertAt
	}

	public set insertAt(value: number) {
		this._fields.insertAt = value
	}

	public get total(): number {
		return this._fields.total
	}

	public set total(value: number) {
		this._fields.total = value
	}

	public _fields: {
		RWMutex: sync.RWMutex
		states: $.Slice<boolean>
		insertAt: number
		total: number
	}

	constructor(init?: Partial<{RWMutex?: sync.RWMutex, states?: $.Slice<boolean>, insertAt?: number, total?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			RWMutex: init?.RWMutex ? $.markAsStructValue($.cloneStructValue(init.RWMutex)) : $.markAsStructValue(new sync.RWMutex()),
			states: init?.states ?? (null! as $.Slice<boolean>),
			insertAt: init?.insertAt ?? (0 as number),
			total: init?.total ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): healthHistory {
		return new healthHistory(this, true)
	}

	public __goscriptAssign(source: healthHistory): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.RWMutex, values.RWMutex)
		target.states = values.states
		target.insertAt = values.insertAt
		target.total = values.total
	}

	public async add(b: boolean): globalThis.Promise<void> {
		let hh: healthHistory | $.VarRef<healthHistory> | null = this;
		using __defer = new $.DisposableStack()
		const hh$: healthHistory = hh == null ? $.pointerTarget<healthHistory>(hh) : (hh as any).__isVarRef === true ? (hh as any).value : (hh as any).__goValue === undefined ? (hh as any) : $.pointerTarget<healthHistory>(hh)
		await (hh$ as healthHistory).RWMutex.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((hh$ as healthHistory).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		$.sliceElems((hh$ as healthHistory).states!)[$.sliceSlot((hh$ as healthHistory).states!, (hh$ as healthHistory).insertAt)] = b;
		;(hh$ as healthHistory).insertAt = ((hh$ as healthHistory).insertAt + 1) % 256;
		;(hh$ as healthHistory).total++
	}

	public async asBools(): globalThis.Promise<$.Slice<boolean>> {
		const hh: healthHistory | $.VarRef<healthHistory> | null = this;
		using __defer = new $.DisposableStack()
		const hh$: healthHistory = hh == null ? $.pointerTarget<healthHistory>(hh) : (hh as any).__isVarRef === true ? (hh as any).value : (hh as any).__goValue === undefined ? (hh as any) : $.pointerTarget<healthHistory>(hh)
		await (hh$ as healthHistory).RWMutex.RLock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((hh$ as healthHistory).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })

		if ((hh$ as healthHistory).total < 256) {
			return $.appendSlice<boolean>(null, $.goSlice((hh$ as healthHistory).states, undefined, (hh$ as healthHistory).total))
		}

		let states: $.Slice<boolean> = (hh$ as healthHistory).states
		let copyStates: $.Slice<boolean> = $.makeSlice<boolean>(0, 256, "boolean")
		copyStates = $.appendSlice(copyStates, $.goSlice(states, (hh$ as healthHistory).insertAt, undefined))
		copyStates = $.appendSlice(copyStates, $.goSlice(states, undefined, (hh$ as healthHistory).insertAt))
		return copyStates
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
		"tchannel.healthHistory",
		() => new healthHistory(),
		() => [$.methodSignature("add", [["b", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("asBools", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool"))], true), $.methodSignature("Lock", [], [], true), $.methodSignature("RLock", [], [], true), $.methodSignature("RLocker", [], ["sync.Locker"], true), $.methodSignature("RUnlock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		healthHistory,
		() => [/* @__PURE__ */ $.structField("RWMutex", "sync.RWMutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("states", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("bool")), [1], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("insertAt", /* @__PURE__ */ $.basicType("int"), [2], 48, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("total", /* @__PURE__ */ $.basicType("int"), [3], 56, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export const _defaultHealthCheckTimeout: time.Duration = 1000000000n

export const _defaultHealthCheckFailuresToClose: number = 5

export const _healthHistorySize: number = 256

export function newHealthHistory(): healthHistory | $.VarRef<healthHistory> | null {
	return new healthHistory({states: $.makeSlice<boolean>(256, undefined, "boolean")})
}
