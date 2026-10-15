// Generated file based on relay.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as json from "@goscript/encoding/json/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as runtime from "@goscript/runtime/index.js"

import * as sort from "@goscript/sort/index.js"

import * as strconv from "@goscript/strconv/index.js"

import * as time from "@goscript/time/index.js"

import * as context from "@goscript/golang.org/x/net/context/index.js"

import * as bytes from "@goscript/bytes/index.js"

import * as binary from "@goscript/encoding/binary/index.js"

import * as errors from "@goscript/errors/index.js"

import * as io from "@goscript/io/index.js"

import * as math from "@goscript/math/index.js"

import * as sync from "@goscript/sync/index.js"

import * as relay from "@goscript/github.com/uber/tchannel-go/relay/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as context2 from "@goscript/context/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import type * as arg22 from "@goscript/github.com/uber/tchannel-go/thrift/arg2/index.js"

import * as tos from "@goscript/github.com/uber/tchannel-go/tos/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as net from "@goscript/net/index.js"

import * as syscall from "@goscript/syscall/index.js"

import * as __goscript__arguments from "./arguments.gs.ts"

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

import * as __goscript_systemerrcode_string from "./systemerrcode_string.gs.ts"

import * as __goscript_tracing from "./tracing.gs.ts"
import "@goscript/encoding/json/index.js"
import "@goscript/fmt/index.js"
import "@goscript/runtime/index.js"
import "@goscript/sort/index.js"
import "@goscript/strconv/index.js"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/bytes/index.js"
import "@goscript/encoding/binary/index.js"
import "@goscript/errors/index.js"
import "@goscript/io/index.js"
import "@goscript/math/index.js"
import "@goscript/sync/index.js"
import "@goscript/github.com/uber/tchannel-go/relay/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber/tchannel-go/tos/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/net/index.js"
import "@goscript/syscall/index.js"
import "./arguments.gs.ts"
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
import "./systemerrcode_string.gs.ts"
import "./tracing.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.relayItem", "tchannel.relayItems", "tchannel.frameReceiver", "tchannel.frameType", "tchannel.Relayer", "tchannel.sentBytesReporter", "tchannel.relayFragmentSender"])

export type frameReceiver = {
	Receive(f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null, fType: frameType): [boolean, string] | globalThis.Promise<[boolean, string]>
}

$.registerInterfaceType(
	"tchannel.frameReceiver",
	null,
	[$.methodSignature("Receive", [["f", /* @__PURE__ */ $.pointerType("tchannel.Frame")], ["fType", /* @__PURE__ */ $.basicType("int", "tchannel.frameType")]], [["sent", /* @__PURE__ */ $.basicType("bool")], ["failureReason", /* @__PURE__ */ $.basicType("string")]])]
);

export type frameType = number

export type sentBytesReporter = {
	SentBytes(size: number): void
}

$.registerInterfaceType(
	"tchannel.sentBytesReporter",
	null,
	[$.methodSignature("SentBytes", [["size", /* @__PURE__ */ $.basicType("uint16")]])]
);

export class relayItem {
	public get remapID(): number {
		return this._fields.remapID
	}

	public set remapID(value: number) {
		this._fields.remapID = value
	}

	public get tomb(): boolean {
		return this._fields.tomb
	}

	public set tomb(value: boolean) {
		this._fields.tomb = value
	}

	public get isOriginator(): boolean {
		return this._fields.isOriginator
	}

	public set isOriginator(value: boolean) {
		this._fields.isOriginator = value
	}

	public get call(): __goscript_relay_api.RelayCall | null {
		return this._fields.call
	}

	public set call(value: __goscript_relay_api.RelayCall | null) {
		this._fields.call = value
	}

	public get destination(): Relayer | $.VarRef<Relayer> | null {
		return this._fields.destination
	}

	public set destination(value: Relayer | $.VarRef<Relayer> | null) {
		this._fields.destination = value
	}

	public get span(): __goscript_tracing.Span {
		return this._fields.span
	}

	public set span(value: __goscript_tracing.Span) {
		this._fields.span = value
	}

	public get timeout(): __goscript_relay_timer_pool.relayTimer | $.VarRef<__goscript_relay_timer_pool.relayTimer> | null {
		return this._fields.timeout
	}

	public set timeout(value: __goscript_relay_timer_pool.relayTimer | $.VarRef<__goscript_relay_timer_pool.relayTimer> | null) {
		this._fields.timeout = value
	}

	public get mutatedChecksum(): __goscript_checksum.Checksum | null {
		return this._fields.mutatedChecksum
	}

	public set mutatedChecksum(value: __goscript_checksum.Checksum | null) {
		this._fields.mutatedChecksum = value
	}

	public _fields: {
		remapID: number
		tomb: boolean
		isOriginator: boolean
		call: __goscript_relay_api.RelayCall | null
		destination: Relayer | $.VarRef<Relayer> | null
		span: __goscript_tracing.Span
		timeout: __goscript_relay_timer_pool.relayTimer | $.VarRef<__goscript_relay_timer_pool.relayTimer> | null
		mutatedChecksum: __goscript_checksum.Checksum | null
	}

	constructor(init?: Partial<{remapID?: number, tomb?: boolean, isOriginator?: boolean, call?: __goscript_relay_api.RelayCall | null, destination?: Relayer | $.VarRef<Relayer> | null, span?: __goscript_tracing.Span, timeout?: __goscript_relay_timer_pool.relayTimer | $.VarRef<__goscript_relay_timer_pool.relayTimer> | null, mutatedChecksum?: __goscript_checksum.Checksum | null}>, __goscriptValue?: boolean) {
		this._fields = {
			remapID: init?.remapID ?? (0 as number),
			tomb: init?.tomb ?? (false as boolean),
			isOriginator: init?.isOriginator ?? (false as boolean),
			call: init?.call ?? (null! as __goscript_relay_api.RelayCall | null),
			destination: init?.destination ?? (null! as Relayer | $.VarRef<Relayer> | null),
			span: init?.span ? init.span.clone() : new __goscript_tracing.Span(undefined, true),
			timeout: init?.timeout ?? (null! as __goscript_relay_timer_pool.relayTimer | $.VarRef<__goscript_relay_timer_pool.relayTimer> | null),
			mutatedChecksum: init?.mutatedChecksum ?? (null! as __goscript_checksum.Checksum | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): relayItem {
		return new relayItem(this, true)
	}

	public __goscriptAssign(source: relayItem): void {
		const target = this._fields
		const values = source._fields
		target.remapID = values.remapID
		target.tomb = values.tomb
		target.isOriginator = values.isOriginator
		target.call = $.assignFieldValue(target.call, values.call, "tchannel.RelayCall")
		target.destination = values.destination
		$.assignStruct(target.span, values.span)
		target.timeout = values.timeout
		target.mutatedChecksum = $.assignFieldValue(target.mutatedChecksum, values.mutatedChecksum, "tchannel.Checksum")
	}

	public async reportRelayBytes(fType: frameType, frameSize: number): globalThis.Promise<void> {
		const ri: relayItem | $.VarRef<relayItem> | null = this;
		const ri$: relayItem = ri == null ? $.pointerTarget<relayItem>(ri) : (ri as any).__isVarRef === true ? (ri as any).value : (ri as any).__goValue === undefined ? (ri as any) : $.pointerTarget<relayItem>(ri)
		if (fType == 0) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>((ri$ as relayItem).call).SentBytes(frameSize), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		} else {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>((ri$ as relayItem).call).ReceivedBytes(frameSize), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	static __typeInfo = $.registerStructType(
		"tchannel.relayItem",
		() => new relayItem(),
		() => [$.methodSignature("reportRelayBytes", [["fType", /* @__PURE__ */ $.basicType("int", "tchannel.frameType")], ["frameSize", /* @__PURE__ */ $.basicType("uint16")]], [], true)],
		relayItem,
		() => [/* @__PURE__ */ $.structField("remapID", /* @__PURE__ */ $.basicType("uint32"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("tomb", /* @__PURE__ */ $.basicType("bool"), [1], 4, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("isOriginator", /* @__PURE__ */ $.basicType("bool"), [2], 5, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("call", "tchannel.RelayCall", [3], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("destination", /* @__PURE__ */ $.pointerType("tchannel.Relayer"), [4], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("span", "tchannel.Span", [5], 32, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("timeout", /* @__PURE__ */ $.pointerType("tchannel.relayTimer"), [6], 64, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("mutatedChecksum", "tchannel.Checksum", [7], 72, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class relayItems {
	public get RWMutex(): sync.RWMutex {
		return this._fields.RWMutex
	}

	public set RWMutex(value: sync.RWMutex) {
		this._fields.RWMutex = value
	}

	public get logger(): __goscript_logger.Logger | null {
		return this._fields.logger
	}

	public set logger(value: __goscript_logger.Logger | null) {
		this._fields.logger = value
	}

	public get timeouts(): __goscript_relay_timer_pool.relayTimerPool | $.VarRef<__goscript_relay_timer_pool.relayTimerPool> | null {
		return this._fields.timeouts
	}

	public set timeouts(value: __goscript_relay_timer_pool.relayTimerPool | $.VarRef<__goscript_relay_timer_pool.relayTimerPool> | null) {
		this._fields.timeouts = value
	}

	public get maxTombs(): bigint {
		return this._fields.maxTombs
	}

	public set maxTombs(value: bigint) {
		this._fields.maxTombs = value
	}

	public get tombs(): bigint {
		return this._fields.tombs
	}

	public set tombs(value: bigint) {
		this._fields.tombs = value
	}

	public get items(): globalThis.Map<number, relayItem> | null {
		return this._fields.items
	}

	public set items(value: globalThis.Map<number, relayItem> | null) {
		this._fields.items = value
	}

	public _fields: {
		RWMutex: sync.RWMutex
		logger: __goscript_logger.Logger | null
		timeouts: __goscript_relay_timer_pool.relayTimerPool | $.VarRef<__goscript_relay_timer_pool.relayTimerPool> | null
		maxTombs: bigint
		tombs: bigint
		items: globalThis.Map<number, relayItem> | null
	}

	constructor(init?: Partial<{RWMutex?: sync.RWMutex, logger?: __goscript_logger.Logger | null, timeouts?: __goscript_relay_timer_pool.relayTimerPool | $.VarRef<__goscript_relay_timer_pool.relayTimerPool> | null, maxTombs?: bigint, tombs?: bigint, items?: globalThis.Map<number, relayItem> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			RWMutex: init?.RWMutex ? $.markAsStructValue($.cloneStructValue(init.RWMutex)) : $.markAsStructValue(new sync.RWMutex()),
			logger: init?.logger ?? (null! as __goscript_logger.Logger | null),
			timeouts: init?.timeouts ?? (null! as __goscript_relay_timer_pool.relayTimerPool | $.VarRef<__goscript_relay_timer_pool.relayTimerPool> | null),
			maxTombs: init?.maxTombs ?? (0n as bigint),
			tombs: init?.tombs ?? (0n as bigint),
			items: init?.items ?? (null! as globalThis.Map<number, relayItem> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): relayItems {
		return new relayItems(this, true)
	}

	public __goscriptAssign(source: relayItems): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.RWMutex, values.RWMutex)
		target.logger = $.assignFieldValue(target.logger, values.logger, "tchannel.Logger")
		target.timeouts = values.timeouts
		target.maxTombs = values.maxTombs
		target.tombs = values.tombs
		target.items = values.items
	}

	public async Add(id: number, item: relayItem): globalThis.Promise<void> {
		let r: relayItems | $.VarRef<relayItems> | null = this;
		await $.pointerValue<relayItems>(r).RWMutex.Lock()
		$.mapSet($.pointerValue<relayItems>(r).items, id, (item).clone())
		$.pointerValue<relayItems>(r).RWMutex.Unlock()
	}

	public async Count(): globalThis.Promise<number> {
		const r: relayItems | $.VarRef<relayItems> | null = this;
		const r$: relayItems = r == null ? $.pointerTarget<relayItems>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<relayItems>(r)
		await (r$ as relayItems).RWMutex.RLock()
		let n = $.len((r$ as relayItems).items) - $.int((r$ as relayItems).tombs)
		void (r$ as relayItems).RWMutex.RUnlock()
		return n
	}

	public async Delete(id: number): globalThis.Promise<[relayItem, boolean]> {
		let r: relayItems | $.VarRef<relayItems> | null = this;
		const r$: relayItems = r == null ? $.pointerTarget<relayItems>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<relayItems>(r)
		await (r$ as relayItems).RWMutex.Lock()
		let [item, ok] = $.mapGet<number, relayItem, relayItem>((r$ as relayItems).items, id, new relayItem(undefined, true))
		if (!ok) {
			void (r$ as relayItems).RWMutex.Unlock()
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((r$ as relayItems).logger).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "id", Value: $.basicInterfaceValue(id, "uint32")}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Attempted to delete non-existent relay item."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [(item).clone(), false]
		}
		$.deleteMapEntry((r$ as relayItems).items, id)
		if (item.tomb) {
			;(r$ as relayItems).tombs--
		}
		void (r$ as relayItems).RWMutex.Unlock()

		__goscript_relay_timer_pool.relayTimer.prototype.Release.call(item.timeout)
		return [(item).clone(), !item.tomb]
	}

	public async Entomb(id: number, deleteAfter: time.Duration): globalThis.Promise<[relayItem, boolean]> {
		let r: relayItems | $.VarRef<relayItems> | null = this;
		const r$: relayItems = r == null ? $.pointerTarget<relayItems>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<relayItems>(r)
		await (r$ as relayItems).RWMutex.Lock()
		if ((r$ as relayItems).tombs > (r$ as relayItems).maxTombs) {
			void (r$ as relayItems).RWMutex.Unlock()
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((r$ as relayItems).logger).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "id", Value: $.basicInterfaceValue(id, "uint32")}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Too many tombstones, deleting relay item immediately."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as relayItems).Delete(id) : relayItems.prototype.Delete.call(r, id))
		}
		let [item, ok] = $.mapGet<number, relayItem, relayItem>((r$ as relayItems).items, id, new relayItem(undefined, true))
		if (!ok) {
			void (r$ as relayItems).RWMutex.Unlock()
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((r$ as relayItems).logger).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "id", Value: $.basicInterfaceValue(id, "uint32")}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Can't find relay item to entomb."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [(item).clone(), false]
		}
		if (item.tomb) {
			void (r$ as relayItems).RWMutex.Unlock()
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((r$ as relayItems).logger).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "id", Value: $.basicInterfaceValue(id, "uint32")}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Re-entombing a tombstone."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [(item).clone(), false]
		}
		;(r$ as relayItems).tombs++
		item.tomb = true
		$.mapSet((r$ as relayItems).items, id, (item).clone())
		void (r$ as relayItems).RWMutex.Unlock()

		// TODO: We should be clearing these out in batches, rather than creating
		// individual timers for each item.
		time.AfterFunc(deleteAfter, $.functionValue(async (): globalThis.Promise<void> => {
			await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as relayItems).Delete(id) : relayItems.prototype.Delete.call(r, id))
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)))
		return [(item).clone(), true]
	}

	public async Get(id: number, stopTimeout: boolean): globalThis.Promise<[relayItem, boolean, boolean]> {
		const r: relayItems | $.VarRef<relayItems> | null = this;
		let stopped: boolean = false
		let found: boolean = false
		using __defer = new $.DisposableStack()
		await $.pointerValue<relayItems>(r).RWMutex.RLock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.RUnlock())($.pointerValue<relayItems>(r).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		let [item, ok] = $.mapGet<number, relayItem, relayItem>($.pointerValue<relayItems>(r).items, id, new relayItem(undefined, true))
		if (!ok) {
			const __goscriptReturn1: [relayItem, boolean, boolean] = [new relayItem(undefined, true), false, false]
			stopped = __goscriptReturn1[1]
			found = __goscriptReturn1[2]
			__defer.dispose()
			return [__goscriptReturn1[0], stopped, found]
		}

		if (!stopTimeout) {
			const __goscriptReturn2: [relayItem, boolean, boolean] = [(item).clone(), false, true]
			stopped = __goscriptReturn2[1]
			found = __goscriptReturn2[2]
			__defer.dispose()
			return [__goscriptReturn2[0], stopped, found]
		}

		const __goscriptReturn3: [relayItem, boolean, boolean] = [(item).clone(), __goscript_relay_timer_pool.relayTimer.prototype.Stop.call(item.timeout), true]
		stopped = __goscriptReturn3[1]
		found = __goscriptReturn3[2]
		__defer.dispose()
		return [__goscriptReturn3[0], stopped, found]
		throw new globalThis.Error("goscript: unreachable return")
	}

	public async IntrospectState(opts: __goscript_introspection.IntrospectionOptions | $.VarRef<__goscript_introspection.IntrospectionOptions> | null, name: string): globalThis.Promise<__goscript_introspection.RelayItemSetState> {
		const ri: relayItems | $.VarRef<relayItems> | null = this;
		using __defer = new $.DisposableStack()
		const ri$: relayItems = ri == null ? $.pointerTarget<relayItems>(ri) : (ri as any).__isVarRef === true ? (ri as any).value : (ri as any).__goValue === undefined ? (ri as any) : $.pointerTarget<relayItems>(ri)
		const opts$: __goscript_introspection.IntrospectionOptions = opts == null ? $.pointerTarget<__goscript_introspection.IntrospectionOptions>(opts) : (opts as any).__isVarRef === true ? (opts as any).value : (opts as any).__goValue === undefined ? (opts as any) : $.pointerTarget<__goscript_introspection.IntrospectionOptions>(opts)
		let setState = (await (async () => { const __goscriptLiteralField0 = await (ri !== null && (ri as any).__isVarRef !== true && (ri as any).__goValue === undefined ? ((ri as any) as relayItems).Count() : relayItems.prototype.Count.call(ri)); return new __goscript_introspection.RelayItemSetState({Name: name, Count: __goscriptLiteralField0}, true) })())
		if ((opts$ as __goscript_introspection.IntrospectionOptions).IncludeExchanges) {
			await (ri$ as relayItems).RWMutex.RLock()
			const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((ri$ as relayItems).RWMutex), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
			__defer.defer(() => { __goscriptDeferCallee1() })

			setState.Items = $.makeMap<string, __goscript_introspection.RelayItemState>()
			for (let [k, v] of (ri$ as relayItems).items?.entries() ?? []) {
				if (!(opts$ as __goscript_introspection.IntrospectionOptions).IncludeTombstones && v.tomb) {
					continue
				}
				let state = new __goscript_introspection.RelayItemState({ID: k, RemapID: v.remapID, DestinationConnectionID: $.pointerValue<__goscript_connection.Connection>($.pointerValue<Relayer>(v.destination).conn).connID, Tomb: v.tomb}, true)
				$.mapSet(setState.Items, strconv.Itoa($.int(k)), (state).clone())
			}
		}

		return (setState).clone()
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
		"tchannel.relayItems",
		() => new relayItems(),
		() => [$.methodSignature("Add", [["id", /* @__PURE__ */ $.basicType("uint32")], ["item", "tchannel.relayItem"]], [], true), $.methodSignature("Count", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("Delete", [["id", /* @__PURE__ */ $.basicType("uint32")]], ["tchannel.relayItem", /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Entomb", [["id", /* @__PURE__ */ $.basicType("uint32")], ["deleteAfter", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], ["tchannel.relayItem", /* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Get", [["id", /* @__PURE__ */ $.basicType("uint32")], ["stopTimeout", /* @__PURE__ */ $.basicType("bool")]], [["_", "tchannel.relayItem"], ["stopped", /* @__PURE__ */ $.basicType("bool")], ["found", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("IntrospectState", [["opts", /* @__PURE__ */ $.pointerType("tchannel.IntrospectionOptions")], ["name", /* @__PURE__ */ $.basicType("string")]], ["tchannel.RelayItemSetState"], true), $.methodSignature("Lock", [], [], true), $.methodSignature("RLock", [], [], true), $.methodSignature("RLocker", [], ["sync.Locker"], true), $.methodSignature("RUnlock", [], [], true), $.methodSignature("TryLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("TryRLock", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Unlock", [], [], true)],
		relayItems,
		() => [/* @__PURE__ */ $.structField("RWMutex", "sync.RWMutex", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("logger", "tchannel.Logger", [1], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("timeouts", /* @__PURE__ */ $.pointerType("tchannel.relayTimerPool"), [2], 40, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("maxTombs", /* @__PURE__ */ $.basicType("uint64"), [3], 48, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("tombs", /* @__PURE__ */ $.basicType("uint64"), [4], 56, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("items", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("uint32"), "tchannel.relayItem"), [5], 64, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class Relayer {
	public get relayHost(): __goscript_relay_api.RelayHost | null {
		return this._fields.relayHost
	}

	public set relayHost(value: __goscript_relay_api.RelayHost | null) {
		this._fields.relayHost = value
	}

	public get maxTimeout(): time.Duration {
		return this._fields.maxTimeout
	}

	public set maxTimeout(value: time.Duration) {
		this._fields.maxTimeout = value
	}

	public get maxConnTimeout(): time.Duration {
		return this._fields.maxConnTimeout
	}

	public set maxConnTimeout(value: time.Duration) {
		this._fields.maxConnTimeout = value
	}

	// localHandlers is the set of service names that are handled by the local
	// channel.
	public get localHandler(): globalThis.Map<string, {}> | null {
		return this._fields.localHandler
	}

	public set localHandler(value: globalThis.Map<string, {}> | null) {
		this._fields.localHandler = value
	}

	// outbound is the remapping for requests that originated on this
	// connection, and are outbound towards some other connection.
	// It stores remappings for all request frames read on this connection.
	public get outbound(): relayItems | $.VarRef<relayItems> | null {
		return this._fields.outbound
	}

	public set outbound(value: relayItems | $.VarRef<relayItems> | null) {
		this._fields.outbound = value
	}

	// inbound is the remapping for requests that originated on some other
	// connection which was directed to this connection.
	// It stores remappings for all response frames read on this connection.
	public get inbound(): relayItems | $.VarRef<relayItems> | null {
		return this._fields.inbound
	}

	public set inbound(value: relayItems | $.VarRef<relayItems> | null) {
		this._fields.inbound = value
	}

	// timeouts is the pool of timers used to track call timeouts.
	// It allows timer re-use, while allowing timers to be created and started separately.
	public get timeouts(): __goscript_relay_timer_pool.relayTimerPool | $.VarRef<__goscript_relay_timer_pool.relayTimerPool> | null {
		return this._fields.timeouts
	}

	public set timeouts(value: __goscript_relay_timer_pool.relayTimerPool | $.VarRef<__goscript_relay_timer_pool.relayTimerPool> | null) {
		this._fields.timeouts = value
	}

	public get peers(): __goscript_root_peer_list.RootPeerList | $.VarRef<__goscript_root_peer_list.RootPeerList> | null {
		return this._fields.peers
	}

	public set peers(value: __goscript_root_peer_list.RootPeerList | $.VarRef<__goscript_root_peer_list.RootPeerList> | null) {
		this._fields.peers = value
	}

	public get conn(): __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null {
		return this._fields.conn
	}

	public set conn(value: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null) {
		this._fields.conn = value
	}

	public get relayConn(): relay.Conn | $.VarRef<relay.Conn> | null {
		return this._fields.relayConn
	}

	public set relayConn(value: relay.Conn | $.VarRef<relay.Conn> | null) {
		this._fields.relayConn = value
	}

	public get logger(): __goscript_logger.Logger | null {
		return this._fields.logger
	}

	public set logger(value: __goscript_logger.Logger | null) {
		this._fields.logger = value
	}

	public get pending(): atomic.Uint32 {
		return this._fields.pending
	}

	public set pending(value: atomic.Uint32) {
		this._fields.pending = value
	}

	public _fields: {
		relayHost: __goscript_relay_api.RelayHost | null
		maxTimeout: time.Duration
		maxConnTimeout: time.Duration
		localHandler: globalThis.Map<string, {}> | null
		outbound: relayItems | $.VarRef<relayItems> | null
		inbound: relayItems | $.VarRef<relayItems> | null
		timeouts: __goscript_relay_timer_pool.relayTimerPool | $.VarRef<__goscript_relay_timer_pool.relayTimerPool> | null
		peers: __goscript_root_peer_list.RootPeerList | $.VarRef<__goscript_root_peer_list.RootPeerList> | null
		conn: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null
		relayConn: relay.Conn | $.VarRef<relay.Conn> | null
		logger: __goscript_logger.Logger | null
		pending: atomic.Uint32
	}

	constructor(init?: Partial<{relayHost?: __goscript_relay_api.RelayHost | null, maxTimeout?: time.Duration, maxConnTimeout?: time.Duration, localHandler?: globalThis.Map<string, {}> | null, outbound?: relayItems | $.VarRef<relayItems> | null, inbound?: relayItems | $.VarRef<relayItems> | null, timeouts?: __goscript_relay_timer_pool.relayTimerPool | $.VarRef<__goscript_relay_timer_pool.relayTimerPool> | null, peers?: __goscript_root_peer_list.RootPeerList | $.VarRef<__goscript_root_peer_list.RootPeerList> | null, conn?: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, relayConn?: relay.Conn | $.VarRef<relay.Conn> | null, logger?: __goscript_logger.Logger | null, pending?: atomic.Uint32}>, __goscriptValue?: boolean) {
		this._fields = {
			relayHost: init?.relayHost ?? (null! as __goscript_relay_api.RelayHost | null),
			maxTimeout: init?.maxTimeout ?? (0n as time.Duration),
			maxConnTimeout: init?.maxConnTimeout ?? (0n as time.Duration),
			localHandler: init?.localHandler ?? (null! as globalThis.Map<string, {}> | null),
			outbound: init?.outbound ?? (null! as relayItems | $.VarRef<relayItems> | null),
			inbound: init?.inbound ?? (null! as relayItems | $.VarRef<relayItems> | null),
			timeouts: init?.timeouts ?? (null! as __goscript_relay_timer_pool.relayTimerPool | $.VarRef<__goscript_relay_timer_pool.relayTimerPool> | null),
			peers: init?.peers ?? (null! as __goscript_root_peer_list.RootPeerList | $.VarRef<__goscript_root_peer_list.RootPeerList> | null),
			conn: init?.conn ?? (null! as __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null),
			relayConn: init?.relayConn ?? (null! as relay.Conn | $.VarRef<relay.Conn> | null),
			logger: init?.logger ?? (null! as __goscript_logger.Logger | null),
			pending: init?.pending ? init.pending.clone() : new atomic.Uint32(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Relayer {
		return new Relayer(this, true)
	}

	public __goscriptAssign(source: Relayer): void {
		const target = this._fields
		const values = source._fields
		target.relayHost = $.assignFieldValue(target.relayHost, values.relayHost, "tchannel.RelayHost")
		target.maxTimeout = values.maxTimeout
		target.maxConnTimeout = values.maxConnTimeout
		target.localHandler = values.localHandler
		target.outbound = values.outbound
		target.inbound = values.inbound
		target.timeouts = values.timeouts
		target.peers = values.peers
		target.conn = values.conn
		target.relayConn = values.relayConn
		target.logger = $.assignFieldValue(target.logger, values.logger, "tchannel.Logger")
		$.assignStruct(target.pending, values.pending)
	}

	public async IntrospectState(opts: __goscript_introspection.IntrospectionOptions | $.VarRef<__goscript_introspection.IntrospectionOptions> | null): globalThis.Promise<__goscript_introspection.RelayerRuntimeState> {
		const r: Relayer | $.VarRef<Relayer> | null = this;
		const r$: Relayer = r == null ? $.pointerTarget<Relayer>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Relayer>(r)
		let count = await relayItems.prototype.Count.call((r$ as Relayer).inbound) + await relayItems.prototype.Count.call((r$ as Relayer).outbound)
		return (await (async () => { const __goscriptLiteralField1 = await relayItems.prototype.IntrospectState.call((r$ as Relayer).inbound, opts, "inbound"); const __goscriptLiteralField2 = await relayItems.prototype.IntrospectState.call((r$ as Relayer).outbound, opts, "outbound"); return new __goscript_introspection.RelayerRuntimeState({Count: count, InboundItems: __goscriptLiteralField1, OutboundItems: __goscriptLiteralField2, MaxTimeout: (r$ as Relayer).maxTimeout, MaxConnectionTimeout: (r$ as Relayer).maxConnTimeout}, true) })())
	}

	public async Receive(f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null, fType: frameType): globalThis.Promise<[boolean, string]> {
		const r: Relayer | $.VarRef<Relayer> | null = this;
		let sent: boolean = false
		let failureReason: string = ""
		const r$: Relayer = r == null ? $.pointerTarget<Relayer>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Relayer>(r)
		let id = $.pointerValue<__goscript_frame.Frame>(f).Header.ID

		// If we receive a response frame, we expect to find that ID in our outbound.
		// If we receive a request frame, we expect to find that ID in our inbound.
		let items: relayItems | $.VarRef<relayItems> | null = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Relayer).receiverItems(fType) : Relayer.prototype.receiverItems.call(r, fType))
		let finished = __goscript_relay_messages.finishesCall(f)

		// Stop the timeout if the call if finished.
		let [item, stopped, ok] = await (items !== null && (items as any).__isVarRef !== true && (items as any).__goValue === undefined ? ((items as any) as relayItems).Get(id, finished) : relayItems.prototype.Get.call(items, id, finished))
		if (!ok) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((r$ as Relayer).logger).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "id", Value: $.basicInterfaceValue(id, "uint32")}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Received a frame without a RelayItem."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [false, "relay-not-found"]
		}
		if (item.tomb || (finished && !stopped)) {
			// Item has previously timed out, or is in the process of timing out.
			// TODO: metrics for late-arriving frames.
			return [true, ""]
		}

		// call res frames don't include the OK bit, so we can't wait until the last
		// frame of a relayed RPC to determine if the call succeeded.
		if ((fType == 1) || ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.Frame).messageType() : __goscript_frame.Frame.prototype.messageType.call(f)) == 192)) {
			// If we've gotten a response frame, we're the originating relayer and
			// should handle stats.
			{
				let [succeeded, failMsg] = await determinesCallSuccess(f)
				if (succeeded) {
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(item.call).Succeeded(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				} else {
					if ($.stringLen(failMsg) > 0) {
						void (__goscriptAwait = $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(item.call).Failed(failMsg), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
			}
		}
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, [boolean, string]>([
			{
				id: 0,
				isSend: true,
				channel: $.pointerValue<__goscript_connection.Connection>((r$ as Relayer).conn).sendCh,
				value: f,
			},
			{
				id: -1,
				isSend: false,
				channel: null,
				onSelected: async (__goscriptSelect0Result) => {
					let [sendBuf, sendBufLimit, sendBufErr] = __goscript_connection.Connection.prototype.sendBufSize.call((r$ as Relayer).conn)
					let now = $.markAsStructValue($.cloneStructValue(((__goscriptAwait = $.pointerValue<__goscript_connection.Connection>((r$ as Relayer).conn).channelConnectionCommon.timeNow!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as time.Time))).UnixNano()
					let logFields: $.Slice<__goscript_logger.LogField> = $.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "id", Value: $.basicInterfaceValue(id, "uint32")}, true), new __goscript_logger.LogField({Key: "destConnSendBufferCurrent", Value: $.basicInterfaceValue(sendBuf, "int")}, true), new __goscript_logger.LogField({Key: "destConnSendBufferLimit", Value: $.basicInterfaceValue(sendBufLimit, "int")}, true), new __goscript_logger.LogField({Key: "sendChQueued", Value: $.basicInterfaceValue($.len($.pointerValue<__goscript_connection.Connection>((r$ as Relayer).conn).sendCh), "int")}, true), new __goscript_logger.LogField({Key: "sendChCapacity", Value: $.basicInterfaceValue($.cap($.pointerValue<__goscript_connection.Connection>((r$ as Relayer).conn).sendCh), "int")}, true), (() => { const __goscriptLiteralField3 = $.basicInterfaceValue($.pointerValue<__goscript_connection.Connection>((r$ as Relayer).conn).lastActivityRead.Load(), "int64"); return new __goscript_logger.LogField({Key: "lastActivityRead", Value: __goscriptLiteralField3}, true) })(), (() => { const __goscriptLiteralField4 = $.basicInterfaceValue($.pointerValue<__goscript_connection.Connection>((r$ as Relayer).conn).lastActivityRead.Load(), "int64"); return new __goscript_logger.LogField({Key: "lastActivityWrite", Value: __goscriptLiteralField4}, true) })(), (() => { const __goscriptLiteralField5 = time.Duration_String($.int64($.int64Sub(now, $.pointerValue<__goscript_connection.Connection>((r$ as Relayer).conn).lastActivityRead.Load()))); return new __goscript_logger.LogField({Key: "sinceLastActivityRead", Value: __goscriptLiteralField5}, true) })(), (() => { const __goscriptLiteralField6 = time.Duration_String($.int64($.int64Sub(now, $.pointerValue<__goscript_connection.Connection>((r$ as Relayer).conn).lastActivityWrite.Load()))); return new __goscript_logger.LogField({Key: "sinceLastActivityWrite", Value: __goscriptLiteralField6}, true) })()])
					if (sendBufErr != null) {
						logFields = $.appendOne(logFields, (await (async () => { const __goscriptLiteralField7 = (__goscriptAwait = (sendBufErr !== null && (sendBufErr as any).__isVarRef !== true && (sendBufErr as any).__goValue === undefined ? (sendBufErr as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(sendBufErr)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_logger.LogField({Key: "destConnSendBufferError", Value: __goscriptLiteralField7}, true) })()))
					}

					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((r$ as Relayer).logger).WithFields(logFields), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Dropping call due to slow connection."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

					let __goscriptShadow0: relayItems | $.VarRef<relayItems> | null = (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Relayer).receiverItems(fType) : Relayer.prototype.receiverItems.call(r, fType))

					let err = "relay-dest-conn-slow"
					// If we're dealing with a response frame, then the client is slow.
					if (fType == 1) {
						err = "relay-source-conn-slow"
					}

					await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Relayer).failRelayItem(__goscriptShadow0, id, err, (await __goscript_init_errFrameNotSent(), __goscript_get_errFrameNotSent())) : Relayer.prototype.failRelayItem.call(r, __goscriptShadow0, id, err, (await __goscript_init_errFrameNotSent(), __goscript_get_errFrameNotSent())))
					return [false, err]
				}
			}
		], true)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}

		if (finished) {
			await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Relayer).finishRelayItem(items, id) : Relayer.prototype.finishRelayItem.call(r, items, id))
		}

		return [true, ""]
	}

	public async Relay(f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<[boolean, $.GoError]> {
		const r: Relayer | $.VarRef<Relayer> | null = this;
		let shouldRelease: boolean = false
		if ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.Frame).messageType() : __goscript_frame.Frame.prototype.messageType.call(f)) != 3) {
			let [__goscriptShadow1, err] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Relayer).handleNonCallReq(f) : Relayer.prototype.handleNonCallReq.call(r, f))
			if ($.comparableEqual(err, errUnknownID)) {
				// This ID may be owned by an outgoing call, so check the outbound
				// message exchange, and if it succeeds, then the frame has been
				// handled successfully.
				{
					let __goscriptShadow2 = await __goscript_mex.messageExchangeSet.prototype.forwardPeerFrame.call($.pointerValue<__goscript_connection.Connection>($.pointerValue<Relayer>(r).conn).outbound, f)
					if (__goscriptShadow2 == null) {
						return [false, null]
					}
				}
			}
			return [__goscriptShadow1, err]
		}

		let __goscriptTuple0: any = __goscript_relay_messages.newLazyCallReq(f)
		let cr: __goscript_relay_messages.lazyCallReq | $.VarRef<__goscript_relay_messages.lazyCallReq> | null = __goscriptTuple0[0]
		let err = __goscriptTuple0[1]
		if (err != null) {
			return [false, err]
		}

		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Relayer).handleCallReq(cr) : Relayer.prototype.handleCallReq.call(r, cr))
	}

	public async addRelayItem(isOriginator: boolean, id: number, remapID: number, destination: Relayer | $.VarRef<Relayer> | null, ttl: time.Duration, span: __goscript_tracing.Span, call: __goscript_relay_api.RelayCall | null, mutatedChecksum: __goscript_checksum.Checksum | null): globalThis.Promise<relayItem> {
		const r: Relayer | $.VarRef<Relayer> | null = this;
		const r$: Relayer = r == null ? $.pointerTarget<Relayer>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Relayer>(r)
		let item = new relayItem({isOriginator: isOriginator, call: call, remapID: remapID, destination: destination, span: span, mutatedChecksum: mutatedChecksum}, true)

		let items: relayItems | $.VarRef<relayItems> | null = (r$ as Relayer).inbound
		if (isOriginator) {
			items = (r$ as Relayer).outbound
		}
		item.timeout = await __goscript_relay_timer_pool.relayTimerPool.prototype.Get.call((r$ as Relayer).timeouts)
		await (items !== null && (items as any).__isVarRef !== true && (items as any).__goValue === undefined ? ((items as any) as relayItems).Add(id, (item).clone()) : relayItems.prototype.Add.call(items, id, (item).clone()))
		__goscript_relay_timer_pool.relayTimer.prototype.Start.call(item.timeout, ttl, items, id, isOriginator)
		return (item).clone()
	}

	public canClose(): boolean {
		const r: Relayer | $.VarRef<Relayer> | null = this;
		if (r == null) {
			return true
		}
		return (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Relayer).countPending() : Relayer.prototype.countPending.call(r)) == 0
	}

	public async canHandleNewCall(): globalThis.Promise<[boolean, __goscript_connection.connectionState]> {
		const r: Relayer | $.VarRef<Relayer> | null = this;
		const r$: Relayer = r == null ? $.pointerTarget<Relayer>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Relayer>(r)
		let canHandle: boolean = false
		let curState: __goscript_connection.connectionState = 0

		await __goscript_connection.Connection.prototype.withStateRLock.call((r$ as Relayer).conn, $.functionValue((): $.GoError => {
			curState = $.pointerValue<__goscript_connection.Connection>((r$ as Relayer).conn).state
			canHandle = curState == 1
			if (canHandle) {
				void (r$ as Relayer).pending.Inc()
			}
			return null
		}, ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)))
		return [canHandle, curState]
	}

	public countPending(): number {
		const r: Relayer | $.VarRef<Relayer> | null = this;
		return $.pointerValue<Relayer>(r).pending.Load()
	}

	public async decrementPending(): globalThis.Promise<void> {
		const r: Relayer | $.VarRef<Relayer> | null = this;
		const r$: Relayer = r == null ? $.pointerTarget<Relayer>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Relayer>(r)
		void (r$ as Relayer).pending.Dec()
		await __goscript_connection.Connection.prototype.checkExchanges.call((r$ as Relayer).conn)
	}

	public async failRelayItem(items: relayItems | $.VarRef<relayItems> | null, id: number, reason: string, err: $.GoError): globalThis.Promise<void> {
		const r: Relayer | $.VarRef<Relayer> | null = this;
		// Stop the timeout, so we either fail it here, or in the timeout goroutine but not both.
		let [item, stopped, found] = await (items !== null && (items as any).__isVarRef !== true && (items as any).__goValue === undefined ? ((items as any) as relayItems).Get(id, true) : relayItems.prototype.Get.call(items, id, true))
		if (!found) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>($.pointerValue<relayItems>(items).logger).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "id", Value: $.basicInterfaceValue(id, "uint32")}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Attempted to fail non-existent relay item."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return
		}
		if (!stopped) {
			return
		}

		// Entomb it so that we don't get unknown exchange errors on further frames
		// for this call.
		let __goscriptTuple1: any = await (items !== null && (items as any).__isVarRef !== true && (items as any).__goValue === undefined ? ((items as any) as relayItems).Entomb(id, 3000000000n) : relayItems.prototype.Entomb.call(items, id, 3000000000n))
		item = $.assignStruct(item, __goscriptTuple1[0])
		let ok = __goscriptTuple1[1]
		if (!ok) {
			return
		}
		if (item.isOriginator) {
			// If the client is too slow, then there's no point sending an error frame.
			if (!$.stringEqual(reason, "relay-source-conn-slow")) {
				await __goscript_connection.Connection.prototype.SendSystemError.call($.pointerValue<Relayer>(r).conn, id, (item.span).clone(), fmt.Errorf("%v: %v", reason, (err as any)))
			}
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(item.call).Failed(reason), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(item.call).End(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Relayer).decrementPending() : Relayer.prototype.decrementPending.call(r))
	}

	public async finishRelayItem(items: relayItems | $.VarRef<relayItems> | null, id: number): globalThis.Promise<void> {
		const r: Relayer | $.VarRef<Relayer> | null = this;
		let [item, ok] = await (items !== null && (items as any).__isVarRef !== true && (items as any).__goValue === undefined ? ((items as any) as relayItems).Delete(id) : relayItems.prototype.Delete.call(items, id))
		if (!ok) {
			return
		}
		if (item.isOriginator) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(item.call).End(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (item.mutatedChecksum != null) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_checksum.Checksum, null>>(item.mutatedChecksum).Release(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Relayer).decrementPending() : Relayer.prototype.decrementPending.call(r))
	}

	public async fragmentingSend(call: __goscript_relay_api.RelayCall | null, f: __goscript_relay_messages.lazyCallReq | $.VarRef<__goscript_relay_messages.lazyCallReq> | null, relayToDest: relayItem, origID: number): globalThis.Promise<$.GoError> {
		const r: Relayer | $.VarRef<Relayer> | null = this;
		const f$: __goscript_relay_messages.lazyCallReq = f == null ? $.pointerTarget<__goscript_relay_messages.lazyCallReq>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_relay_messages.lazyCallReq>(f)
		if ((f$ as __goscript_relay_messages.lazyCallReq).isArg2Fragmented) {
			return errFragmentedArg2WithAppend
		}
		if (!bytes.Equal((f$ as __goscript_relay_messages.lazyCallReq)._as, __goscript_relay_messages.__goscript_get__tchanThriftValueBytes())) {
			return fmt.Errorf("%v: got %s", (errArg2ThriftOnly as any), $.interfaceValue((f$ as __goscript_relay_messages.lazyCallReq)._as, "[]byte", /* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("uint8"))))
		}

		let cs = relayToDest.mutatedChecksum

		// TODO(echung): should we pool the writers?
		let fragWriter: __goscript_fragmenting_writer.fragmentingWriter | $.VarRef<__goscript_fragmenting_writer.fragmentingWriter> | null = __goscript_fragmenting_writer.newFragmentingWriter($.pointerValue<Relayer>(r).logger, $.interfaceValue<__goscript_fragmenting_writer.fragmentSender | null>(Relayer.prototype.newFragmentSender.call(r, $.interfaceValue<frameReceiver | null>(relayToDest.destination, "*tchannel.Relayer", /* @__PURE__ */ $.pointerType("tchannel.Relayer")), f, origID, (call as sentBytesReporter | null)), "*tchannel.relayFragmentSender", /* @__PURE__ */ $.pointerType("tchannel.relayFragmentSender")), cs)

		let [arg2Writer, err] = await (fragWriter !== null && (fragWriter as any).__isVarRef !== true && (fragWriter as any).__goValue === undefined ? ((fragWriter as any) as __goscript_fragmenting_writer.fragmentingWriter).ArgWriter(false) : __goscript_fragmenting_writer.fragmentingWriter.prototype.ArgWriter.call(fragWriter, false))
		if (err != null) {
			return fmt.Errorf("get arg2 writer: %v", (err as any))
		}

		{
			let __goscriptShadow3 = await writeArg2WithAppends((arg2Writer as io.WriteCloser | null), (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_relay_messages.lazyCallReq).arg2() : __goscript_relay_messages.lazyCallReq.prototype.arg2.call(f)), (f$ as __goscript_relay_messages.lazyCallReq).arg2Appends)
			if (__goscriptShadow3 != null) {
				return fmt.Errorf("write arg2: %v", (__goscriptShadow3 as any))
			}
		}
		{
			let __goscriptShadow4 = (__goscriptAwait = (arg2Writer !== null && (arg2Writer as any).__isVarRef !== true && (arg2Writer as any).__goValue === undefined ? (arg2Writer as Exclude<__goscript__arguments.ArgWriter, null>) : $.pointerValue<Exclude<__goscript__arguments.ArgWriter, null>>(arg2Writer)).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (__goscriptShadow4 != null) {
				return fmt.Errorf("close arg2 writer: %v", (__goscriptShadow4 as any))
			}
		}

		{
			let __goscriptShadow5 = await $.markAsStructValue($.cloneStructValue(__goscript__arguments.NewArgWriter(...(await (async () => { const __goscriptTupleArg0 = await (fragWriter !== null && (fragWriter as any).__isVarRef !== true && (fragWriter as any).__goValue === undefined ? ((fragWriter as any) as __goscript_fragmenting_writer.fragmentingWriter).ArgWriter(true) : __goscript_fragmenting_writer.fragmentingWriter.prototype.ArgWriter.call(fragWriter, true)); return [(__goscriptTupleArg0[0] as io.WriteCloser | null), __goscriptTupleArg0[1]] as [io.WriteCloser | null, $.GoError] })())))).Write((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_relay_messages.lazyCallReq).arg3() : __goscript_relay_messages.lazyCallReq.prototype.arg3.call(f)))
			if (__goscriptShadow5 != null) {
				return errors.New("arg3 write failed")
			}
		}

		return null
	}

	public async getDestination(f: __goscript_relay_messages.lazyCallReq | $.VarRef<__goscript_relay_messages.lazyCallReq> | null, call: __goscript_relay_api.RelayCall | null): globalThis.Promise<[__goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null, boolean, $.GoError]> {
		const r: Relayer | $.VarRef<Relayer> | null = this;
		const r$: Relayer = r == null ? $.pointerTarget<Relayer>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Relayer>(r)
		const f$: __goscript_relay_messages.lazyCallReq = f == null ? $.pointerTarget<__goscript_relay_messages.lazyCallReq>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_relay_messages.lazyCallReq>(f)
		{
			let [, , ok] = await relayItems.prototype.Get.call((r$ as Relayer).outbound, $.pointerValue<__goscript_frame.Frame>((f$ as __goscript_relay_messages.lazyCallReq).Frame).Header.ID, false)
			if (ok) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((r$ as Relayer).logger).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "id", Value: $.basicInterfaceValue($.pointerValue<__goscript_frame.Frame>((f$ as __goscript_relay_messages.lazyCallReq).Frame).Header.ID, "uint32")}, true), (() => { const __goscriptLiteralField8 = $.bytesToString((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_relay_messages.lazyCallReq).Caller() : __goscript_relay_messages.lazyCallReq.prototype.Caller.call(f))); return new __goscript_logger.LogField({Key: "source", Value: __goscriptLiteralField8}, true) })(), (() => { const __goscriptLiteralField9 = $.bytesToString((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_relay_messages.lazyCallReq).Service() : __goscript_relay_messages.lazyCallReq.prototype.Service.call(f))); return new __goscript_logger.LogField({Key: "dest", Value: __goscriptLiteralField9}, true) })(), (() => { const __goscriptLiteralField10 = $.bytesToString((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_relay_messages.lazyCallReq).Method() : __goscript_relay_messages.lazyCallReq.prototype.Method.call(f))); return new __goscript_logger.LogField({Key: "method", Value: __goscriptLiteralField10}, true) })()])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Received duplicate callReq."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (__goscriptAwait = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? (call as Exclude<__goscript_relay_api.RelayCall, null>) : $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(call)).Failed(await __goscript_errors.SystemErrCode_relayMetricsKey(255)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				// TODO: this is a protocol error, kill the connection.
				return [null, false, errors.New("callReq with already active ID")]
			}
		}

		// Get the destination
		let __goscriptTuple2: any = await (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? (call as Exclude<__goscript_relay_api.RelayCall, null>) : $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(call)).Destination()
		let peer: __goscript_peer.Peer | $.VarRef<__goscript_peer.Peer> | null = __goscriptTuple2[0]
		let ok = __goscriptTuple2[1]
		if (!ok) {
			void (__goscriptAwait = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? (call as Exclude<__goscript_relay_api.RelayCall, null>) : $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(call)).Failed("relay-bad-relay-host"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await __goscript_connection.Connection.prototype.SendSystemError.call((r$ as Relayer).conn, $.pointerValue<__goscript_frame.Frame>((f$ as __goscript_relay_messages.lazyCallReq).Frame).Header.ID, (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_relay_messages.lazyCallReq).Span() : __goscript_relay_messages.lazyCallReq.prototype.Span.call(f)), (await __goscript_init_errBadRelayHost(), __goscript_get_errBadRelayHost()))
			return [null, false, (await __goscript_init_errBadRelayHost(), __goscript_get_errBadRelayHost())]
		}

		let __goscriptTuple3: any = await __goscript_peer.Peer.prototype.getConnectionRelay.call(peer, (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_relay_messages.lazyCallReq).TTL() : __goscript_relay_messages.lazyCallReq.prototype.TTL.call(f)), (r$ as Relayer).maxConnTimeout)
		let remoteConn: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null = __goscriptTuple3[0]
		let err = __goscriptTuple3[1]
		if (err != null) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((r$ as Relayer).logger).WithFields($.arrayToSlice<__goscript_logger.LogField>([await __goscript_logger.ErrField(err), (() => { const __goscriptLiteralField11 = $.bytesToString((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_relay_messages.lazyCallReq).Caller() : __goscript_relay_messages.lazyCallReq.prototype.Caller.call(f))); return new __goscript_logger.LogField({Key: "source", Value: __goscriptLiteralField11}, true) })(), (() => { const __goscriptLiteralField12 = $.bytesToString((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_relay_messages.lazyCallReq).Service() : __goscript_relay_messages.lazyCallReq.prototype.Service.call(f))); return new __goscript_logger.LogField({Key: "dest", Value: __goscriptLiteralField12}, true) })(), (() => { const __goscriptLiteralField13 = $.bytesToString((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_relay_messages.lazyCallReq).Method() : __goscript_relay_messages.lazyCallReq.prototype.Method.call(f))); return new __goscript_logger.LogField({Key: "method", Value: __goscriptLiteralField13}, true) })(), new __goscript_logger.LogField({Key: "selectedPeer", Value: $.interfaceValue(peer, "*tchannel.Peer", /* @__PURE__ */ $.pointerType("tchannel.Peer"))}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Failed to connect to relay host."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? (call as Exclude<__goscript_relay_api.RelayCall, null>) : $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(call)).Failed("relay-connection-failed"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await __goscript_connection.Connection.prototype.SendSystemError.call((r$ as Relayer).conn, $.pointerValue<__goscript_frame.Frame>((f$ as __goscript_relay_messages.lazyCallReq).Frame).Header.ID, (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_relay_messages.lazyCallReq).Span() : __goscript_relay_messages.lazyCallReq.prototype.Span.call(f)), await __goscript_errors.NewWrappedSystemError(7, err))
			return [null, false, null]
		}

		return [remoteConn, true, null]
	}

	public async handleCallReq(f: __goscript_relay_messages.lazyCallReq | $.VarRef<__goscript_relay_messages.lazyCallReq> | null): globalThis.Promise<[boolean, $.GoError]> {
		const r: Relayer | $.VarRef<Relayer> | null = this;
		let shouldRelease: boolean = false
		const r$: Relayer = r == null ? $.pointerTarget<Relayer>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Relayer>(r)
		const f$: __goscript_relay_messages.lazyCallReq = f == null ? $.pointerTarget<__goscript_relay_messages.lazyCallReq>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_relay_messages.lazyCallReq>(f)
		{
			let handled = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Relayer).handleLocalCallReq(f) : Relayer.prototype.handleLocalCallReq.call(r, f))
			if (handled) {
				return [false, null]
			}
		}

		let [call, err] = await $.pointerValue<Exclude<__goscript_relay_api.RelayHost, null>>((r$ as Relayer).relayHost).Start($.interfaceValue<relay.CallFrame | null>(f, "*tchannel.lazyCallReq", /* @__PURE__ */ $.pointerType("tchannel.lazyCallReq")), (r$ as Relayer).relayConn)
		if (err != null) {
			// If we have a RateLimitDropError we record the statistic, but
			// we *don't* send an error frame back to the client.
			{
				let [, silentlyDrop] = $.typeAssertTuple<relay.RateLimitDropError>(err, "relay.RateLimitDropError")
				if (silentlyDrop) {
					if (call != null) {
						void (__goscriptAwait = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? (call as Exclude<__goscript_relay_api.RelayCall, null>) : $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(call)).Failed("relay-dropped"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
						void (__goscriptAwait = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? (call as Exclude<__goscript_relay_api.RelayCall, null>) : $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(call)).End(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
					return [true, null]
				}
			}
			{
				let [, ok] = $.typeAssertTuple<__goscript_errors.SystemError>(err, "tchannel.SystemError")
				if (!ok) {
					err = await __goscript_errors.NewSystemError(4, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), null)
				}
			}
			if (call != null) {
				void (__goscriptAwait = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? (call as Exclude<__goscript_relay_api.RelayCall, null>) : $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(call)).Failed(await __goscript_errors.SystemErrCode_relayMetricsKey(__goscript_errors.GetSystemErrorCode(err))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (__goscriptAwait = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? (call as Exclude<__goscript_relay_api.RelayCall, null>) : $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(call)).End(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			await __goscript_connection.Connection.prototype.SendSystemError.call((r$ as Relayer).conn, $.pointerValue<__goscript_frame.Frame>((f$ as __goscript_relay_messages.lazyCallReq).Frame).Header.ID, (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_relay_messages.lazyCallReq).Span() : __goscript_relay_messages.lazyCallReq.prototype.Span.call(f)), err)

			// If the RelayHost returns a protocol error, close the connection.
			if (__goscript_errors.GetSystemErrorCode(err) == 255) {
				return [true, await __goscript_connection.Connection.prototype.close.call((r$ as Relayer).conn, $.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "reason", Value: "RelayHost returned protocol error"}, true)]))]
			}
			return [true, null]
		}

		// Check that the current connection is in a valid state to handle a new call.
		{
			let [canHandle, state] = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Relayer).canHandleNewCall() : Relayer.prototype.canHandleNewCall.call(r))
			if (!canHandle) {
				void (__goscriptAwait = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? (call as Exclude<__goscript_relay_api.RelayCall, null>) : $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(call)).Failed("relay-client-conn-inactive"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				void (__goscriptAwait = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? (call as Exclude<__goscript_relay_api.RelayCall, null>) : $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(call)).End(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				let __goscriptShadow6 = new __goscript_errors.errConnNotActive({info: "incoming", state: state}, true)
				await __goscript_connection.Connection.prototype.SendSystemError.call((r$ as Relayer).conn, $.pointerValue<__goscript_frame.Frame>((f$ as __goscript_relay_messages.lazyCallReq).Frame).Header.ID, (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_relay_messages.lazyCallReq).Span() : __goscript_relay_messages.lazyCallReq.prototype.Span.call(f)), await __goscript_errors.NewWrappedSystemError(4, $.interfaceValue<$.GoError>((__goscriptShadow6).clone(), "tchannel.errConnNotActive", "tchannel.errConnNotActive")))
				return [true, $.interfaceValue<$.GoError>((__goscriptShadow6).clone(), "tchannel.errConnNotActive", "tchannel.errConnNotActive")]
			}
		}

		// Get a remote connection and check whether it can handle this call.
		let __goscriptTuple4: any = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Relayer).getDestination(f, call) : Relayer.prototype.getDestination.call(r, f, call))
		let remoteConn: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null = __goscriptTuple4[0]
		let ok = __goscriptTuple4[1]
		err = __goscriptTuple4[2]
		let remoteConn$: __goscript_connection.Connection = remoteConn == null ? $.pointerTarget<__goscript_connection.Connection>(remoteConn) : (remoteConn as any).__isVarRef === true ? (remoteConn as any).value : (remoteConn as any).__goValue === undefined ? (remoteConn as any) : $.pointerTarget<__goscript_connection.Connection>(remoteConn)
		if ((err == null) && ok) {
			{
				let [canHandle, state] = await Relayer.prototype.canHandleNewCall.call((remoteConn$ as __goscript_connection.Connection).relay)
				if (!canHandle) {
					err = await __goscript_errors.NewWrappedSystemError(7, $.interfaceValue<$.GoError>(new __goscript_errors.errConnNotActive({info: "selected remote", state: state}, true), "tchannel.errConnNotActive", "tchannel.errConnNotActive"))
					void (__goscriptAwait = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? (call as Exclude<__goscript_relay_api.RelayCall, null>) : $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(call)).Failed("relay-remote-inactive"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					await __goscript_connection.Connection.prototype.SendSystemError.call((r$ as Relayer).conn, $.pointerValue<__goscript_frame.Frame>((f$ as __goscript_relay_messages.lazyCallReq).Frame).Header.ID, (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_relay_messages.lazyCallReq).Span() : __goscript_relay_messages.lazyCallReq.prototype.Span.call(f)), await __goscript_errors.NewWrappedSystemError(4, err))
				}
			}
		}
		if ((err != null) || !ok) {
			// Failed to get a remote connection, or the connection is not in the right
			// state to handle this call. Since we already incremented pending on
			// the current relay, we need to decrement it.
			await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Relayer).decrementPending() : Relayer.prototype.decrementPending.call(r))
			void (__goscriptAwait = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? (call as Exclude<__goscript_relay_api.RelayCall, null>) : $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(call)).End(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return [true, err]
		}

		let origID = $.pointerValue<__goscript_frame.Frame>((f$ as __goscript_relay_messages.lazyCallReq).Frame).Header.ID
		let destinationID = (remoteConn !== null && (remoteConn as any).__isVarRef !== true && (remoteConn as any).__goValue === undefined ? ((remoteConn as any) as __goscript_connection.Connection).NextMessageID() : __goscript_connection.Connection.prototype.NextMessageID.call(remoteConn))
		let ttl = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_relay_messages.lazyCallReq).TTL() : __goscript_relay_messages.lazyCallReq.prototype.TTL.call(f))
		if (ttl > (r$ as Relayer).maxTimeout) {
			ttl = (r$ as Relayer).maxTimeout
			void (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_relay_messages.lazyCallReq).SetTTL((r$ as Relayer).maxTimeout) : __goscript_relay_messages.lazyCallReq.prototype.SetTTL.call(f, (r$ as Relayer).maxTimeout))
		}
		let span = (f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_relay_messages.lazyCallReq).Span() : __goscript_relay_messages.lazyCallReq.prototype.Span.call(f))

		let mutatedChecksum: __goscript_checksum.Checksum | null = null! as __goscript_checksum.Checksum | null
		if ($.sliceLen((f$ as __goscript_relay_messages.lazyCallReq).arg2Appends) > 0) {
			mutatedChecksum = await __goscript_checksum.ChecksumType_New((f$ as __goscript_relay_messages.lazyCallReq).checksumType)
		}

		// The remote side of the relay doesn't need to track stats or call state.
		await Relayer.prototype.addRelayItem.call((remoteConn$ as __goscript_connection.Connection).relay, false, destinationID, $.pointerValue<__goscript_frame.Frame>((f$ as __goscript_relay_messages.lazyCallReq).Frame).Header.ID, r, ttl, span, call, null)
		let relayToDest = await Relayer.prototype.addRelayItem.call(r, true, $.pointerValue<__goscript_frame.Frame>((f$ as __goscript_relay_messages.lazyCallReq).Frame).Header.ID, destinationID, (remoteConn$ as __goscript_connection.Connection).relay, ttl, span, call, mutatedChecksum)

		$.pointerValue<__goscript_frame.Frame>((f$ as __goscript_relay_messages.lazyCallReq).Frame).Header.ID = destinationID

		// If we have appends, the size of the frame to be relayed will change, potentially going
		// over the max frame size. Do a fragmenting send which is slightly more expensive but
		// will handle fragmenting if it is needed.
		if ($.sliceLen((f$ as __goscript_relay_messages.lazyCallReq).arg2Appends) > 0) {
			{
				let __goscriptShadow7 = await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Relayer).fragmentingSend(call, f, (relayToDest).clone(), origID) : Relayer.prototype.fragmentingSend.call(r, call, f, (relayToDest).clone(), origID))
				if (__goscriptShadow7 != null) {
					await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Relayer).failRelayItem((r$ as Relayer).outbound, origID, "relay-arg2-modify-failed", __goscriptShadow7) : Relayer.prototype.failRelayItem.call(r, (r$ as Relayer).outbound, origID, "relay-arg2-modify-failed", __goscriptShadow7))
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((r$ as Relayer).logger).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "id", Value: $.basicInterfaceValue(origID, "uint32")}, true), (await (async () => { const __goscriptLiteralField14 = (__goscriptAwait = (__goscriptShadow7 !== null && (__goscriptShadow7 as any).__isVarRef !== true && (__goscriptShadow7 as any).__goValue === undefined ? (__goscriptShadow7 as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(__goscriptShadow7)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new __goscript_logger.LogField({Key: "err", Value: __goscriptLiteralField14}, true) })()), (() => { const __goscriptLiteralField15 = $.bytesToString((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_relay_messages.lazyCallReq).Caller() : __goscript_relay_messages.lazyCallReq.prototype.Caller.call(f))); return new __goscript_logger.LogField({Key: "caller", Value: __goscriptLiteralField15}, true) })(), (() => { const __goscriptLiteralField16 = $.bytesToString((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_relay_messages.lazyCallReq).Service() : __goscript_relay_messages.lazyCallReq.prototype.Service.call(f))); return new __goscript_logger.LogField({Key: "dest", Value: __goscriptLiteralField16}, true) })(), (() => { const __goscriptLiteralField17 = $.bytesToString((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_relay_messages.lazyCallReq).Method() : __goscript_relay_messages.lazyCallReq.prototype.Method.call(f))); return new __goscript_logger.LogField({Key: "method", Value: __goscriptLiteralField17}, true) })()])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Failed to send call with modified arg2."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}

			// fragmentingSend always sends new frames in place of the old frame so we must
			// release it separately
			return [true, null]
		}

		void (__goscriptAwait = (call !== null && (call as any).__isVarRef !== true && (call as any).__goValue === undefined ? (call as Exclude<__goscript_relay_api.RelayCall, null>) : $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(call)).SentBytes($.pointerValue<__goscript_frame.Frame>((f$ as __goscript_relay_messages.lazyCallReq).Frame).Header.FrameSize()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		let [sent, failure] = await Relayer.prototype.Receive.call(relayToDest.destination, (f$ as __goscript_relay_messages.lazyCallReq).Frame, 0)
		if (!sent) {
			await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Relayer).failRelayItem((r$ as Relayer).outbound, origID, failure, (await __goscript_init_errFrameNotSent(), __goscript_get_errFrameNotSent())) : Relayer.prototype.failRelayItem.call(r, (r$ as Relayer).outbound, origID, failure, (await __goscript_init_errFrameNotSent(), __goscript_get_errFrameNotSent())))
			return [true, null]
		}
		return [false, null]
	}

	public async handleLocalCallReq(cr: __goscript_relay_messages.lazyCallReq | $.VarRef<__goscript_relay_messages.lazyCallReq> | null): globalThis.Promise<boolean> {
		const r: Relayer | $.VarRef<Relayer> | null = this;
		let shouldRelease: boolean = false
		const r$: Relayer = r == null ? $.pointerTarget<Relayer>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Relayer>(r)
		const cr$: __goscript_relay_messages.lazyCallReq = cr == null ? $.pointerTarget<__goscript_relay_messages.lazyCallReq>(cr) : (cr as any).__isVarRef === true ? (cr as any).value : (cr as any).__goValue === undefined ? (cr as any) : $.pointerTarget<__goscript_relay_messages.lazyCallReq>(cr)
		// Check whether this is a service we want to handle locally.
		{
			let [, ok] = $.mapGet<string, {}, {}>((r$ as Relayer).localHandler, $.bytesToString((cr !== null && (cr as any).__isVarRef !== true && (cr as any).__goValue === undefined ? ((cr as any) as __goscript_relay_messages.lazyCallReq).Service() : __goscript_relay_messages.lazyCallReq.prototype.Service.call(cr))), {})
			if (!ok) {
				return false
			}
		}

		let f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null = (cr$ as __goscript_relay_messages.lazyCallReq).Frame

		// We can only handle non-fragmented calls in the relay channel.
		// This is a simplification to avoid back references from a mex to a
		// relayItem so that the relayItem is cleared when the call completes.
		if ((cr !== null && (cr as any).__isVarRef !== true && (cr as any).__goValue === undefined ? ((cr as any) as __goscript_relay_messages.lazyCallReq).HasMoreFragments() : __goscript_relay_messages.lazyCallReq.prototype.HasMoreFragments.call(cr))) {
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((r$ as Relayer).logger).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "id", Value: $.basicInterfaceValue($.pointerValue<__goscript_frame.Frame>((cr$ as __goscript_relay_messages.lazyCallReq).Frame).Header.ID, "uint32")}, true), (() => { const __goscriptLiteralField18 = $.bytesToString((cr !== null && (cr as any).__isVarRef !== true && (cr as any).__goValue === undefined ? ((cr as any) as __goscript_relay_messages.lazyCallReq).Caller() : __goscript_relay_messages.lazyCallReq.prototype.Caller.call(cr))); return new __goscript_logger.LogField({Key: "source", Value: __goscriptLiteralField18}, true) })(), (() => { const __goscriptLiteralField19 = $.bytesToString((cr !== null && (cr as any).__isVarRef !== true && (cr as any).__goValue === undefined ? ((cr as any) as __goscript_relay_messages.lazyCallReq).Service() : __goscript_relay_messages.lazyCallReq.prototype.Service.call(cr))); return new __goscript_logger.LogField({Key: "dest", Value: __goscriptLiteralField19}, true) })(), (() => { const __goscriptLiteralField20 = $.bytesToString((cr !== null && (cr as any).__isVarRef !== true && (cr as any).__goValue === undefined ? ((cr as any) as __goscript_relay_messages.lazyCallReq).Method() : __goscript_relay_messages.lazyCallReq.prototype.Method.call(cr))); return new __goscript_logger.LogField({Key: "method", Value: __goscriptLiteralField20}, true) })()])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Error("Received fragmented callReq intended for local relay channel, can only handle unfragmented calls."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			await __goscript_connection.Connection.prototype.SendSystemError.call((r$ as Relayer).conn, $.pointerValue<__goscript_frame.Frame>(f).Header.ID, (cr !== null && (cr as any).__isVarRef !== true && (cr as any).__goValue === undefined ? ((cr as any) as __goscript_relay_messages.lazyCallReq).Span() : __goscript_relay_messages.lazyCallReq.prototype.Span.call(cr)), (await __goscript_init_errRelayMethodFragmented(), __goscript_get_errRelayMethodFragmented()))
			return true
		}

		{
			let release = await __goscript_connection.Connection.prototype.handleFrameNoRelay.call((r$ as Relayer).conn, f)
			if (release) {
				void (__goscriptAwait = $.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>($.pointerValue<__goscript_connection.Connection>((r$ as Relayer).conn).opts.FramePool).Release(f), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
		}
		return true
	}

	public async handleNonCallReq(f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<[boolean, $.GoError]> {
		const r: Relayer | $.VarRef<Relayer> | null = this;
		let shouldRelease: boolean = false
		const r$: Relayer = r == null ? $.pointerTarget<Relayer>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Relayer>(r)
		const f$: __goscript_frame.Frame = f == null ? $.pointerTarget<__goscript_frame.Frame>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<__goscript_frame.Frame>(f)
		let __goscriptShadow8 = await frameTypeFor(f)
		let finished = __goscript_relay_messages.finishesCall(f)

		// If we read a request frame, we need to use the outbound map to decide
		// the destination. Otherwise, we use the inbound map.
		let items: relayItems | $.VarRef<relayItems> | null = (r$ as Relayer).outbound
		if (__goscriptShadow8 == 1) {
			items = (r$ as Relayer).inbound
		}

		// Stop the timeout if the call if finished.
		let __goscriptTuple5: any = await (items !== null && (items as any).__isVarRef !== true && (items as any).__goValue === undefined ? ((items as any) as relayItems).Get((f$ as __goscript_frame.Frame).Header.ID, finished) : relayItems.prototype.Get.call(items, (f$ as __goscript_frame.Frame).Header.ID, finished))
		let item = $.varRef(__goscriptTuple5[0])
		let stopped = __goscriptTuple5[1]
		let ok = __goscriptTuple5[2]
		if (!ok) {
			return [true, errUnknownID]
		}
		if (item.value.tomb || (finished && !stopped)) {
			// Item has previously timed out, or is in the process of timing out.
			// TODO: metrics for late-arriving frames.
			return [true, null]
		}

		switch ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.Frame).messageType() : __goscript_frame.Frame.prototype.messageType.call(f))) {
			case 4:
			{
				let [cr, err] = __goscript_relay_messages.newLazyCallRes(f)
				if (err == null) {
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(item.value.call).CallResponse($.interfaceValue<relay.RespFrame | null>((cr).clone(), "tchannel.lazyCallRes", "tchannel.lazyCallRes")), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				} else {
					void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((r$ as Relayer).logger).WithFields($.arrayToSlice<__goscript_logger.LogField>([await __goscript_logger.ErrField(err), new __goscript_logger.LogField({Key: "id", Value: $.basicInterfaceValue((f$ as __goscript_frame.Frame).Header.ID, "uint32")}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Error("Malformed callRes frame."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
				break
			}
			case 19:
			{
				if (item.value.mutatedChecksum != null) {
					await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Relayer).updateMutatedCallReqContinueChecksum(f, item.value.mutatedChecksum) : Relayer.prototype.updateMutatedCallReqContinueChecksum.call(r, f, item.value.mutatedChecksum))
				}
				break
			}
		}

		// Track sent/received bytes. We don't do this before we check
		// for timeouts, since this should only be called before call.End().
		await item.value.reportRelayBytes(__goscriptShadow8, (f$ as __goscript_frame.Frame).Header.FrameSize())

		let originalID = (f$ as __goscript_frame.Frame).Header.ID;
		;(f$ as __goscript_frame.Frame).Header.ID = item.value.remapID

		let [sent, failure] = await Relayer.prototype.Receive.call(item.value.destination, f, __goscriptShadow8)
		if (!sent) {
			await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Relayer).failRelayItem(items, originalID, failure, (await __goscript_init_errFrameNotSent(), __goscript_get_errFrameNotSent())) : Relayer.prototype.failRelayItem.call(r, items, originalID, failure, (await __goscript_init_errFrameNotSent(), __goscript_get_errFrameNotSent())))
			return [true, null]
		}

		if (finished) {
			await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Relayer).finishRelayItem(items, originalID) : Relayer.prototype.finishRelayItem.call(r, items, originalID))
		}
		return [false, null]
	}

	public newFragmentSender(dstRelay: frameReceiver | null, cr: __goscript_relay_messages.lazyCallReq | $.VarRef<__goscript_relay_messages.lazyCallReq> | null, origID: number, sentReporter: sentBytesReporter | null): relayFragmentSender | $.VarRef<relayFragmentSender> | null {
		const r: Relayer | $.VarRef<Relayer> | null = this;
		const r$: Relayer = r == null ? $.pointerTarget<Relayer>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Relayer>(r)
		// TODO(cinchurge): pool fragment senders
		return new relayFragmentSender({callReq: cr, framePool: $.pointerValue<__goscript_connection.Connection>((r$ as Relayer).conn).opts.FramePool, frameReceiver: dstRelay, failRelayItemFunc: $.functionValue(((__receiver) => (items: relayItems | $.VarRef<relayItems> | null, id: number, reason: string, err: $.GoError) => __receiver.failRelayItem(items, id, reason, err))((r$ as Relayer)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.relayItems"), /* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.basicType("string"), "error"], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Relayer).failRelayItem-fm"), outboundRelayItems: (r$ as Relayer).outbound, origID: origID, sentReporter: sentReporter})
	}

	public receiverItems(fType: frameType): relayItems | $.VarRef<relayItems> | null {
		const r: Relayer | $.VarRef<Relayer> | null = this;
		const r$: Relayer = r == null ? $.pointerTarget<Relayer>(r) : (r as any).__isVarRef === true ? (r as any).value : (r as any).__goValue === undefined ? (r as any) : $.pointerTarget<Relayer>(r)
		if (fType == 0) {
			return (r$ as Relayer).inbound
		}
		return (r$ as Relayer).outbound
	}

	public async timeoutRelayItem(items: relayItems | $.VarRef<relayItems> | null, id: number, isOriginator: boolean): globalThis.Promise<void> {
		const r: Relayer | $.VarRef<Relayer> | null = this;
		let [item, ok] = await (items !== null && (items as any).__isVarRef !== true && (items as any).__goValue === undefined ? ((items as any) as relayItems).Entomb(id, 3000000000n) : relayItems.prototype.Entomb.call(items, id, 3000000000n))
		if (!ok) {
			return
		}
		if (isOriginator) {
			await __goscript_connection.Connection.prototype.SendSystemError.call($.pointerValue<Relayer>(r).conn, id, (item.span).clone(), __goscript_errors.ErrTimeout)
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(item.call).Failed("timeout"), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_relay_api.RelayCall, null>>(item.call).End(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}

		await (r !== null && (r as any).__isVarRef !== true && (r as any).__goValue === undefined ? ((r as any) as Relayer).decrementPending() : Relayer.prototype.decrementPending.call(r))
	}

	public async updateMutatedCallReqContinueChecksum(f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null, cs: __goscript_checksum.Checksum | null): globalThis.Promise<void> {
		const r: Relayer | $.VarRef<Relayer> | null = this;
		let rbuf: typed.ReadBuffer | $.VarRef<typed.ReadBuffer> | null = typed.NewReadBuffer((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.Frame).SizedPayload() : __goscript_frame.Frame.prototype.SizedPayload.call(f)))
		void (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).SkipBytes(1) : typed.ReadBuffer.prototype.SkipBytes.call(rbuf, 1))
		void (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).SkipBytes(1) : typed.ReadBuffer.prototype.SkipBytes.call(rbuf, 1))

		let checksumRef: typed.BytesRef = ((typed.ReadBuffer.prototype.ReadBytes.call(rbuf, (__goscriptAwait = (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? (cs as Exclude<__goscript_checksum.Checksum, null>) : $.pointerValue<Exclude<__goscript_checksum.Checksum, null>>(cs)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) as typed.BytesRef) as typed.BytesRef)

		// We only support non-fragmented arg2 for mutated calls, so by the time we hit callReqContinue both
		// arg1 and arg2 must already have been read. As the call would be finished when we've read all of
		// arg3, it isn't necessary to separately track its completion.
		//
		// In theory we could have a frame with 0-length arg3, which can happen if a manual flush occurred
		// after writing 0 bytes for arg3. This is handled correctly by
		// 1) reading n=0 (nArg3)
		// 2) reading 0 bytes from the rbuf
		// 3) updating the checksum with the current running checksum
		//
		// Additionally, if the checksum type results in a 0-length checksum, the .Update() would
		// become a copy between empty slices, which correctly becomes a noop.
		// TODO(cinchurge): include a test for len(arg3)==0 in the unit tests
		let n = (rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadUint16() : typed.ReadBuffer.prototype.ReadUint16.call(rbuf))
		void ((__goscriptAwait = (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? (cs as Exclude<__goscript_checksum.Checksum, null>) : $.pointerValue<Exclude<__goscript_checksum.Checksum, null>>(cs)).Add((rbuf !== null && (rbuf as any).__isVarRef !== true && (rbuf as any).__goValue === undefined ? ((rbuf as any) as typed.ReadBuffer).ReadBytes($.int(n)) : typed.ReadBuffer.prototype.ReadBytes.call(rbuf, $.int(n)))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
		typed.BytesRef_Update(checksumRef, ((__goscriptAwait = (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? (cs as Exclude<__goscript_checksum.Checksum, null>) : $.pointerValue<Exclude<__goscript_checksum.Checksum, null>>(cs)).Sum(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>))
	}

	static __typeInfo = $.registerStructType(
		"tchannel.Relayer",
		() => new Relayer(),
		() => [$.methodSignature("IntrospectState", [["opts", /* @__PURE__ */ $.pointerType("tchannel.IntrospectionOptions")]], ["tchannel.RelayerRuntimeState"], true), $.methodSignature("Receive", [["f", /* @__PURE__ */ $.pointerType("tchannel.Frame")], ["fType", /* @__PURE__ */ $.basicType("int", "tchannel.frameType")]], [["sent", /* @__PURE__ */ $.basicType("bool")], ["failureReason", /* @__PURE__ */ $.basicType("string")]], true), $.methodSignature("Relay", [["f", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], [["shouldRelease", /* @__PURE__ */ $.basicType("bool")], ["_", "error"]], true), $.methodSignature("addRelayItem", [["isOriginator", /* @__PURE__ */ $.basicType("bool")], ["id", /* @__PURE__ */ $.basicType("uint32")], ["remapID", /* @__PURE__ */ $.basicType("uint32")], ["destination", /* @__PURE__ */ $.pointerType("tchannel.Relayer")], ["ttl", /* @__PURE__ */ $.basicType("int64", "time.Duration")], ["span", "tchannel.Span"], ["call", "tchannel.RelayCall"], ["mutatedChecksum", "tchannel.Checksum"]], ["tchannel.relayItem"], true), $.methodSignature("canClose", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("canHandleNewCall", [], [/* @__PURE__ */ $.basicType("bool"), /* @__PURE__ */ $.basicType("int", "tchannel.connectionState")], true), $.methodSignature("countPending", [], [/* @__PURE__ */ $.basicType("uint32")], true), $.methodSignature("decrementPending", [], [], true), $.methodSignature("failRelayItem", [["items", /* @__PURE__ */ $.pointerType("tchannel.relayItems")], ["id", /* @__PURE__ */ $.basicType("uint32")], ["reason", /* @__PURE__ */ $.basicType("string")], ["err", "error"]], [], true), $.methodSignature("finishRelayItem", [["items", /* @__PURE__ */ $.pointerType("tchannel.relayItems")], ["id", /* @__PURE__ */ $.basicType("uint32")]], [], true), $.methodSignature("fragmentingSend", [["call", "tchannel.RelayCall"], ["f", /* @__PURE__ */ $.pointerType("tchannel.lazyCallReq")], ["relayToDest", "tchannel.relayItem"], ["origID", /* @__PURE__ */ $.basicType("uint32")]], ["error"], true), $.methodSignature("getDestination", [["f", /* @__PURE__ */ $.pointerType("tchannel.lazyCallReq")], ["call", "tchannel.RelayCall"]], [/* @__PURE__ */ $.pointerType("tchannel.Connection"), /* @__PURE__ */ $.basicType("bool"), "error"], true), $.methodSignature("handleCallReq", [["f", /* @__PURE__ */ $.pointerType("tchannel.lazyCallReq")]], [["shouldRelease", /* @__PURE__ */ $.basicType("bool")], ["_", "error"]], true), $.methodSignature("handleLocalCallReq", [["cr", /* @__PURE__ */ $.pointerType("tchannel.lazyCallReq")]], [["shouldRelease", /* @__PURE__ */ $.basicType("bool")]], true), $.methodSignature("handleNonCallReq", [["f", /* @__PURE__ */ $.pointerType("tchannel.Frame")]], [["shouldRelease", /* @__PURE__ */ $.basicType("bool")], ["_", "error"]], true), $.methodSignature("newFragmentSender", [["dstRelay", "tchannel.frameReceiver"], ["cr", /* @__PURE__ */ $.pointerType("tchannel.lazyCallReq")], ["origID", /* @__PURE__ */ $.basicType("uint32")], ["sentReporter", "tchannel.sentBytesReporter"]], [/* @__PURE__ */ $.pointerType("tchannel.relayFragmentSender")], true), $.methodSignature("receiverItems", [["fType", /* @__PURE__ */ $.basicType("int", "tchannel.frameType")]], [/* @__PURE__ */ $.pointerType("tchannel.relayItems")], true), $.methodSignature("timeoutRelayItem", [["items", /* @__PURE__ */ $.pointerType("tchannel.relayItems")], ["id", /* @__PURE__ */ $.basicType("uint32")], ["isOriginator", /* @__PURE__ */ $.basicType("bool")]], [], true), $.methodSignature("updateMutatedCallReqContinueChecksum", [["f", /* @__PURE__ */ $.pointerType("tchannel.Frame")], ["cs", "tchannel.Checksum"]], [], true)],
		Relayer,
		() => [/* @__PURE__ */ $.structField("relayHost", "tchannel.RelayHost", [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("maxTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [1], 16, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("maxConnTimeout", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("localHandler", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [3], 32, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("outbound", /* @__PURE__ */ $.pointerType("tchannel.relayItems"), [4], 40, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("inbound", /* @__PURE__ */ $.pointerType("tchannel.relayItems"), [5], 48, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("timeouts", /* @__PURE__ */ $.pointerType("tchannel.relayTimerPool"), [6], 56, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("peers", /* @__PURE__ */ $.pointerType("tchannel.RootPeerList"), [7], 64, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("conn", /* @__PURE__ */ $.pointerType("tchannel.Connection"), [8], 72, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("relayConn", /* @__PURE__ */ $.pointerType("relay.Conn"), [9], 80, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("logger", "tchannel.Logger", [10], 88, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("pending", "atomic.Uint32", [11], 104, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class relayFragmentSender {
	public get callReq(): __goscript_relay_messages.lazyCallReq | $.VarRef<__goscript_relay_messages.lazyCallReq> | null {
		return this._fields.callReq
	}

	public set callReq(value: __goscript_relay_messages.lazyCallReq | $.VarRef<__goscript_relay_messages.lazyCallReq> | null) {
		this._fields.callReq = value
	}

	public get framePool(): __goscript_frame_pool.FramePool | null {
		return this._fields.framePool
	}

	public set framePool(value: __goscript_frame_pool.FramePool | null) {
		this._fields.framePool = value
	}

	public get frameReceiver(): frameReceiver | null {
		return this._fields.frameReceiver
	}

	public set frameReceiver(value: frameReceiver | null) {
		this._fields.frameReceiver = value
	}

	public get failRelayItemFunc(): ((items: relayItems | $.VarRef<relayItems> | null, id: number, failure: string, err: $.GoError) => void) | null {
		return this._fields.failRelayItemFunc
	}

	public set failRelayItemFunc(value: ((items: relayItems | $.VarRef<relayItems> | null, id: number, failure: string, err: $.GoError) => void) | null) {
		this._fields.failRelayItemFunc = value
	}

	public get outboundRelayItems(): relayItems | $.VarRef<relayItems> | null {
		return this._fields.outboundRelayItems
	}

	public set outboundRelayItems(value: relayItems | $.VarRef<relayItems> | null) {
		this._fields.outboundRelayItems = value
	}

	public get origID(): number {
		return this._fields.origID
	}

	public set origID(value: number) {
		this._fields.origID = value
	}

	public get sentReporter(): sentBytesReporter | null {
		return this._fields.sentReporter
	}

	public set sentReporter(value: sentBytesReporter | null) {
		this._fields.sentReporter = value
	}

	public _fields: {
		callReq: __goscript_relay_messages.lazyCallReq | $.VarRef<__goscript_relay_messages.lazyCallReq> | null
		framePool: __goscript_frame_pool.FramePool | null
		frameReceiver: frameReceiver | null
		failRelayItemFunc: ((items: relayItems | $.VarRef<relayItems> | null, id: number, failure: string, err: $.GoError) => void) | null
		outboundRelayItems: relayItems | $.VarRef<relayItems> | null
		origID: number
		sentReporter: sentBytesReporter | null
	}

	constructor(init?: Partial<{callReq?: __goscript_relay_messages.lazyCallReq | $.VarRef<__goscript_relay_messages.lazyCallReq> | null, framePool?: __goscript_frame_pool.FramePool | null, frameReceiver?: frameReceiver | null, failRelayItemFunc?: ((items: relayItems | $.VarRef<relayItems> | null, id: number, failure: string, err: $.GoError) => void) | null, outboundRelayItems?: relayItems | $.VarRef<relayItems> | null, origID?: number, sentReporter?: sentBytesReporter | null}>, __goscriptValue?: boolean) {
		this._fields = {
			callReq: init?.callReq ?? (null! as __goscript_relay_messages.lazyCallReq | $.VarRef<__goscript_relay_messages.lazyCallReq> | null),
			framePool: init?.framePool ?? (null! as __goscript_frame_pool.FramePool | null),
			frameReceiver: init?.frameReceiver ?? (null! as frameReceiver | null),
			failRelayItemFunc: init?.failRelayItemFunc ?? (null! as ((items: relayItems | $.VarRef<relayItems> | null, id: number, failure: string, err: $.GoError) => void) | null),
			outboundRelayItems: init?.outboundRelayItems ?? (null! as relayItems | $.VarRef<relayItems> | null),
			origID: init?.origID ?? (0 as number),
			sentReporter: init?.sentReporter ?? (null! as sentBytesReporter | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): relayFragmentSender {
		return new relayFragmentSender(this, true)
	}

	public __goscriptAssign(source: relayFragmentSender): void {
		const target = this._fields
		const values = source._fields
		target.callReq = values.callReq
		target.framePool = $.assignFieldValue(target.framePool, values.framePool, "tchannel.FramePool")
		target.frameReceiver = $.assignFieldValue(target.frameReceiver, values.frameReceiver, "tchannel.frameReceiver")
		target.failRelayItemFunc = values.failRelayItemFunc
		target.outboundRelayItems = values.outboundRelayItems
		target.origID = values.origID
		target.sentReporter = $.assignFieldValue(target.sentReporter, values.sentReporter, "tchannel.sentBytesReporter")
	}

	public doneSending(): void {
		const rfs: relayFragmentSender | $.VarRef<relayFragmentSender> | null = this;
	}

	public async flushFragment(wf: __goscript_fragmenting_writer.writableFragment | $.VarRef<__goscript_fragmenting_writer.writableFragment> | null): globalThis.Promise<$.GoError> {
		const rfs: relayFragmentSender | $.VarRef<relayFragmentSender> | null = this;
		const rfs$: relayFragmentSender = rfs == null ? $.pointerTarget<relayFragmentSender>(rfs) : (rfs as any).__isVarRef === true ? (rfs as any).value : (rfs as any).__goValue === undefined ? (rfs as any) : $.pointerTarget<relayFragmentSender>(rfs)
		const wf$: __goscript_fragmenting_writer.writableFragment = wf == null ? $.pointerTarget<__goscript_fragmenting_writer.writableFragment>(wf) : (wf as any).__isVarRef === true ? (wf as any).value : (wf as any).__goValue === undefined ? (wf as any) : $.pointerTarget<__goscript_fragmenting_writer.writableFragment>(wf)
		$.pointerValue<__goscript_frame.Frame>((wf$ as __goscript_fragmenting_writer.writableFragment).frame).Header.SetPayloadSize($.uint(typed.WriteBuffer.prototype.BytesWritten.call((wf$ as __goscript_fragmenting_writer.writableFragment).contents), 16))
		void (__goscriptAwait = $.pointerValue<Exclude<sentBytesReporter, null>>((rfs$ as relayFragmentSender).sentReporter).SentBytes($.pointerValue<__goscript_frame.Frame>((wf$ as __goscript_fragmenting_writer.writableFragment).frame).Header.FrameSize()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)

		let [sent, failure] = await $.pointerValue<Exclude<frameReceiver, null>>((rfs$ as relayFragmentSender).frameReceiver).Receive((wf$ as __goscript_fragmenting_writer.writableFragment).frame, 0)
		if (!sent) {
			void (__goscriptAwait = (rfs$ as relayFragmentSender).failRelayItemFunc!((rfs$ as relayFragmentSender).outboundRelayItems, (rfs$ as relayFragmentSender).origID, failure, (await __goscript_init_errFrameNotSent(), __goscript_get_errFrameNotSent())), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			void (__goscriptAwait = $.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>((rfs$ as relayFragmentSender).framePool).Release((wf$ as __goscript_fragmenting_writer.writableFragment).frame), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			return null
		}
		return null
	}

	public async newFragment(initial: boolean, checksum: __goscript_checksum.Checksum | null): globalThis.Promise<[__goscript_fragmenting_writer.writableFragment | $.VarRef<__goscript_fragmenting_writer.writableFragment> | null, $.GoError]> {
		const rfs: relayFragmentSender | $.VarRef<relayFragmentSender> | null = this;
		const rfs$: relayFragmentSender = rfs == null ? $.pointerTarget<relayFragmentSender>(rfs) : (rfs as any).__isVarRef === true ? (rfs as any).value : (rfs as any).__goValue === undefined ? (rfs as any) : $.pointerTarget<relayFragmentSender>(rfs)
		let frame: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null = ((__goscriptAwait = $.pointerValue<Exclude<__goscript_frame_pool.FramePool, null>>((rfs$ as relayFragmentSender).framePool).Get(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null)
		let frame$: __goscript_frame.Frame = frame == null ? $.pointerTarget<__goscript_frame.Frame>(frame) : (frame as any).__isVarRef === true ? (frame as any).value : (frame as any).__goValue === undefined ? (frame as any) : $.pointerTarget<__goscript_frame.Frame>(frame);
		;(frame$ as __goscript_frame.Frame).Header.ID = $.pointerValue<__goscript_frame.Frame>($.pointerValue<__goscript_relay_messages.lazyCallReq>((rfs$ as relayFragmentSender).callReq).Frame).Header.ID
		if (initial) {
			;(frame$ as __goscript_frame.Frame).Header.messageType = 3
		} else {
			;(frame$ as __goscript_frame.Frame).Header.messageType = 19
		}

		let contents: typed.WriteBuffer | $.VarRef<typed.WriteBuffer> | null = typed.NewWriteBuffer($.goSlice((frame$ as __goscript_frame.Frame).Payload, undefined, undefined))

		// flags:1
		// Flags MUST be copied over from the callReq frame to all new fragments since if there are more
		// fragments to follow the callReq, the destination needs to know about this or those frames will
		// be dropped from the call
		let flagsRef: typed.ByteRef = ((contents !== null && (contents as any).__isVarRef !== true && (contents as any).__goValue === undefined ? ((contents as any) as typed.WriteBuffer).DeferByte() : typed.WriteBuffer.prototype.DeferByte.call(contents)) as typed.ByteRef)
		typed.ByteRef_Update(flagsRef, $.arrayIndex($.pointerValue<__goscript_frame.Frame>($.pointerValue<__goscript_relay_messages.lazyCallReq>((rfs$ as relayFragmentSender).callReq).Frame).Payload!, 0))

		if (initial) {
			// Copy all data before the checksum for the initial frame
			typed.WriteBuffer.prototype.WriteBytes.call(contents, $.goSlice($.pointerValue<__goscript_frame.Frame>($.pointerValue<__goscript_relay_messages.lazyCallReq>((rfs$ as relayFragmentSender).callReq).Frame).Payload, 0 + 1, $.pointerValue<__goscript_relay_messages.lazyCallReq>((rfs$ as relayFragmentSender).callReq).checksumTypeOffset))
		}

		// checksumType:1
		typed.WriteBuffer.prototype.WriteSingleByte.call(contents, $.uint((__goscriptAwait = (checksum !== null && (checksum as any).__isVarRef !== true && (checksum as any).__goValue === undefined ? (checksum as Exclude<__goscript_checksum.Checksum, null>) : $.pointerValue<Exclude<__goscript_checksum.Checksum, null>>(checksum)).TypeCode(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), 8))

		// checksum: checksum.Size()
		let checksumRef: typed.BytesRef = (typed.WriteBuffer.prototype.DeferBytes.call(contents, (__goscriptAwait = (checksum !== null && (checksum as any).__isVarRef !== true && (checksum as any).__goValue === undefined ? (checksum as Exclude<__goscript_checksum.Checksum, null>) : $.pointerValue<Exclude<__goscript_checksum.Checksum, null>>(checksum)).Size(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)) as typed.BytesRef)

		if (initial) {
			// arg1~1: write arg1 to the initial frame
			typed.WriteBuffer.prototype.WriteUint16.call(contents, $.uint($.sliceLen($.pointerValue<__goscript_relay_messages.lazyCallReq>((rfs$ as relayFragmentSender).callReq).method), 16))
			void (contents !== null && (contents as any).__isVarRef !== true && (contents as any).__goValue === undefined ? ((contents as any) as typed.WriteBuffer).WriteBytes($.pointerValue<__goscript_relay_messages.lazyCallReq>((rfs$ as relayFragmentSender).callReq).method) : typed.WriteBuffer.prototype.WriteBytes.call(contents, $.pointerValue<__goscript_relay_messages.lazyCallReq>((rfs$ as relayFragmentSender).callReq).method))
			void ((__goscriptAwait = (checksum !== null && (checksum as any).__isVarRef !== true && (checksum as any).__goValue === undefined ? (checksum as Exclude<__goscript_checksum.Checksum, null>) : $.pointerValue<Exclude<__goscript_checksum.Checksum, null>>(checksum)).Add($.pointerValue<__goscript_relay_messages.lazyCallReq>((rfs$ as relayFragmentSender).callReq).method), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Slice<number>)
		}

		// TODO(cinchurge): pool writableFragment
		return [new __goscript_fragmenting_writer.writableFragment({flagsRef: (flagsRef as typed.ByteRef), checksumRef: (checksumRef as typed.BytesRef), checksum: $.interfaceValue<__goscript_checksum.Checksum | null>(new __goscript_checksum.noReleaseChecksum({Checksum: checksum}), "*tchannel.noReleaseChecksum", /* @__PURE__ */ $.pointerType("tchannel.noReleaseChecksum")), contents: contents, frame: frame}), (contents !== null && (contents as any).__isVarRef !== true && (contents as any).__goValue === undefined ? ((contents as any) as typed.WriteBuffer).Err() : typed.WriteBuffer.prototype.Err.call(contents))]
	}

	static __typeInfo = $.registerStructType(
		"tchannel.relayFragmentSender",
		() => new relayFragmentSender(),
		() => [$.methodSignature("doneSending", [], [], true), $.methodSignature("flushFragment", [["wf", /* @__PURE__ */ $.pointerType("tchannel.writableFragment")]], ["error"], true), $.methodSignature("newFragment", [["initial", /* @__PURE__ */ $.basicType("bool")], ["checksum", "tchannel.Checksum"]], [/* @__PURE__ */ $.pointerType("tchannel.writableFragment"), "error"], true)],
		relayFragmentSender,
		() => [/* @__PURE__ */ $.structField("callReq", /* @__PURE__ */ $.pointerType("tchannel.lazyCallReq"), [0], 0, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("framePool", "tchannel.FramePool", [1], 8, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("frameReceiver", "tchannel.frameReceiver", [2], 24, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("failRelayItemFunc", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.relayItems"), /* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.basicType("string"), "error"], results: [] } as $.FunctionTypeInfo), [3], 40, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("outboundRelayItems", /* @__PURE__ */ $.pointerType("tchannel.relayItems"), [4], 48, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("origID", /* @__PURE__ */ $.basicType("uint32"), [5], 56, false, { pkgPath: "github.com/uber/tchannel-go" }), /* @__PURE__ */ $.structField("sentReporter", "tchannel.sentBytesReporter", [6], 64, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export const _defaultRelayMaxTombs: number = 30000

export const _relayTombTTL: time.Duration = 3000000000n

export const _defaultRelayMaxTimeout: time.Duration = 120000000000n

export const _relayErrorNotFound: string = "relay-not-found"

export const _relayErrorDestConnSlow: string = "relay-dest-conn-slow"

export const _relayErrorSourceConnSlow: string = "relay-source-conn-slow"

export const _relayArg2ModifyFailed: string = "relay-arg2-modify-failed"

export const _relayNoRelease: boolean = false

export const _relayShouldRelease: boolean = true

export const requestFrame: frameType = 0

export const responseFrame: frameType = 1

export var errRelayMethodFragmented: $.GoError

export async function __goscript_init_errRelayMethodFragmented(): globalThis.Promise<void> {
	if (((errRelayMethodFragmented) as any) === undefined) {
		errRelayMethodFragmented = await __goscript_errors.NewSystemError(6, "relay handler cannot receive fragmented calls", null)
	}
}

export function __goscript_get_errRelayMethodFragmented(): $.GoError {
	if (((errRelayMethodFragmented) as any) === undefined) {
		throw new globalThis.Error("goscript package variable errRelayMethodFragmented read before initialization")
	}
	return errRelayMethodFragmented
}

export function __goscript_set_errRelayMethodFragmented(__goscriptValue: $.GoError): void {
	errRelayMethodFragmented = __goscriptValue
}

export var errFrameNotSent: $.GoError

export async function __goscript_init_errFrameNotSent(): globalThis.Promise<void> {
	if (((errFrameNotSent) as any) === undefined) {
		errFrameNotSent = await __goscript_errors.NewSystemError(7, "frame was not sent to remote side", null)
	}
}

export function __goscript_get_errFrameNotSent(): $.GoError {
	if (((errFrameNotSent) as any) === undefined) {
		throw new globalThis.Error("goscript package variable errFrameNotSent read before initialization")
	}
	return errFrameNotSent
}

export function __goscript_set_errFrameNotSent(__goscriptValue: $.GoError): void {
	errFrameNotSent = __goscriptValue
}

export var errBadRelayHost: $.GoError

export async function __goscript_init_errBadRelayHost(): globalThis.Promise<void> {
	if (((errBadRelayHost) as any) === undefined) {
		errBadRelayHost = await __goscript_errors.NewSystemError(4, "bad relay host implementation", null)
	}
}

export function __goscript_get_errBadRelayHost(): $.GoError {
	if (((errBadRelayHost) as any) === undefined) {
		throw new globalThis.Error("goscript package variable errBadRelayHost read before initialization")
	}
	return errBadRelayHost
}

export function __goscript_set_errBadRelayHost(__goscriptValue: $.GoError): void {
	errBadRelayHost = __goscriptValue
}

export let errUnknownID: $.GoError = errors.New("non-callReq for inactive ID")

export function __goscript_set_errUnknownID(__goscriptValue: $.GoError): void {
	errUnknownID = __goscriptValue
}

export let errNoNHInArg2: $.GoError = errors.New("no nh in arg2")

export function __goscript_set_errNoNHInArg2(__goscriptValue: $.GoError): void {
	errNoNHInArg2 = __goscriptValue
}

export let errFragmentedArg2WithAppend: $.GoError = errors.New("fragmented arg2 not supported for appends")

export function __goscript_set_errFragmentedArg2WithAppend(__goscriptValue: $.GoError): void {
	errFragmentedArg2WithAppend = __goscriptValue
}

export let errArg2ThriftOnly: $.GoError = errors.New("cannot inspect or modify arg2 for non-Thrift calls")

export function __goscript_set_errArg2ThriftOnly(__goscriptValue: $.GoError): void {
	errArg2ThriftOnly = __goscriptValue
}

export function newRelayItems(logger: __goscript_logger.Logger | null, maxTombs: bigint): relayItems | $.VarRef<relayItems> | null {
	if (maxTombs == 0n) {
		maxTombs = 30000n
	}
	return new relayItems({items: $.makeMap<number, relayItem>(), logger: logger, maxTombs: maxTombs})
}

export async function NewRelayer(ch: __goscript_channel.Channel | $.VarRef<__goscript_channel.Channel> | null, conn: __goscript_connection.Connection | $.VarRef<__goscript_connection.Connection> | null): globalThis.Promise<Relayer | $.VarRef<Relayer> | null> {
	const ch$: __goscript_channel.Channel = ch == null ? $.pointerTarget<__goscript_channel.Channel>(ch) : (ch as any).__isVarRef === true ? (ch as any).value : (ch as any).__goValue === undefined ? (ch as any) : $.pointerTarget<__goscript_channel.Channel>(ch)
	const conn$: __goscript_connection.Connection = conn == null ? $.pointerTarget<__goscript_connection.Connection>(conn) : (conn as any).__isVarRef === true ? (conn as any).value : (conn as any).__goValue === undefined ? (conn as any) : $.pointerTarget<__goscript_connection.Connection>(conn)
	let r: Relayer | $.VarRef<Relayer> | null = (await (async () => { const __goscriptLiteralField21 = (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as __goscript_channel.Channel).RelayHost() : __goscript_channel.Channel.prototype.RelayHost.call(ch)); const __goscriptLiteralField22 = newRelayItems((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((conn$ as __goscript_connection.Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "relayItems", Value: "outbound"}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (ch$ as __goscript_channel.Channel).relayMaxTombs); const __goscriptLiteralField23 = newRelayItems((__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((conn$ as __goscript_connection.Connection).channelConnectionCommon.log).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "relayItems", Value: "inbound"}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), (ch$ as __goscript_channel.Channel).relayMaxTombs); const __goscriptLiteralField24 = (ch !== null && (ch as any).__isVarRef !== true && (ch as any).__goValue === undefined ? ((ch as any) as __goscript_channel.Channel).RootPeers() : __goscript_channel.Channel.prototype.RootPeers.call(ch)); return new Relayer({relayHost: __goscriptLiteralField21, maxTimeout: (ch$ as __goscript_channel.Channel).relayMaxTimeout, maxConnTimeout: (ch$ as __goscript_channel.Channel).relayMaxConnTimeout, localHandler: (ch$ as __goscript_channel.Channel).channelConnectionCommon.relayLocal, outbound: __goscriptLiteralField22, inbound: __goscriptLiteralField23, peers: __goscriptLiteralField24, conn: conn, relayConn: (await (async () => { const __goscriptLiteralField25 = (__goscriptAwait = $.pointerValue<Exclude<net.Addr, null>>((__goscriptAwait = $.pointerValue<Exclude<net.Conn, null>>((conn$ as __goscript_connection.Connection).conn).RemoteAddr(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).String(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait); return new relay.Conn({RemoteAddr: __goscriptLiteralField25, RemoteProcessName: (conn !== null && (conn as any).__isVarRef !== true && (conn as any).__goValue === undefined ? ((conn as any) as __goscript_connection.Connection).RemotePeerInfo() : __goscript_connection.Connection.prototype.RemotePeerInfo.call(conn)).ProcessName, IsOutbound: (conn$ as __goscript_connection.Connection).connDirection == 2, Context: (conn$ as __goscript_connection.Connection).baseContext}) })()), logger: (conn$ as __goscript_connection.Connection).channelConnectionCommon.log}) })())
	$.pointerValue<Relayer>(r).timeouts = await __goscript_relay_timer_pool.newRelayTimerPool($.functionValue(((__receiver) => (items: relayItems | $.VarRef<relayItems> | null, id: number, isOriginator: boolean) => __receiver.timeoutRelayItem(items, id, isOriginator))($.pointerValue<Relayer>(r)), ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.pointerType("tchannel.relayItems"), /* @__PURE__ */ $.basicType("uint32"), /* @__PURE__ */ $.basicType("bool")], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go.(*Relayer).timeoutRelayItem-fm"), (ch$ as __goscript_channel.Channel).relayTimerVerify)
	return r
}

export async function writeArg2WithAppends(w: io.WriteCloser | null, arg2: $.Slice<number>, appends: $.Slice<relay.KeyVal>): globalThis.Promise<$.GoError> {
	let err: $.GoError = null! as $.GoError
	if ($.sliceLen(arg2) < 2) {
		return errNoNHInArg2
	}

	let writer: typed.Writer | $.VarRef<typed.Writer> | null = typed.NewWriter((w as io.Writer | null))

	// nh:2 is the first two bytes of arg2, which should always be present
	let nh = $.uint((($.markAsStructValue($.cloneStructValue($.pointerValue<any>(binary.BigEndian))).Uint16($.goSlice(arg2, undefined, 2)) + $.uint($.sliceLen(appends), 16)) & 0xffff), 16)
	await (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? ((writer as any) as typed.Writer).WriteUint16(nh) : typed.Writer.prototype.WriteUint16.call(writer, nh))

	// arg2[2:] is the existing sequence of key/val pairs, which we can just copy
	// over verbatim
	if ($.sliceLen(arg2) > 2) {
		await (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? ((writer as any) as typed.Writer).WriteBytes($.goSlice(arg2, 2, undefined)) : typed.Writer.prototype.WriteBytes.call(writer, $.goSlice(arg2, 2, undefined)))
	}

	// append new key/val pairs to end of arg2
	for (let __goscriptRangeTarget0 = appends, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let kv = ((__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as relay.KeyVal)).clone()
		await (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? ((writer as any) as typed.Writer).WriteLen16Bytes(kv.Key) : typed.Writer.prototype.WriteLen16Bytes.call(writer, kv.Key))
		await (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? ((writer as any) as typed.Writer).WriteLen16Bytes(kv.Val) : typed.Writer.prototype.WriteLen16Bytes.call(writer, kv.Val))
	}

	return (writer !== null && (writer as any).__isVarRef !== true && (writer as any).__goValue === undefined ? ((writer as any) as typed.Writer).Err() : typed.Writer.prototype.Err.call(writer))
}

export async function frameTypeFor(f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<frameType> {
	{
		let t = $.pointerValue<__goscript_frame.Frame>(f).Header.messageType
		switch (t) {
			case 4:
			case 20:
			case 255:
			case 209:
			{
				return 1
				break
			}
			case 3:
			case 19:
			case 208:
			case 192:
			{
				return 0
				break
			}
			default:
			{
				$.panic(await fmt.Sprintf("unsupported frame type: %v", $.namedValueInterfaceValue<any>(t, "tchannel.messageType", __goscriptStatic0(), __goscriptStatic1(), __goscriptStatic2())))
				break
			}
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function determinesCallSuccess(f: __goscript_frame.Frame | $.VarRef<__goscript_frame.Frame> | null): globalThis.Promise<[boolean, string]> {
	let succeeded: boolean = false
	let failMsg: string = ""
	switch ((f !== null && (f as any).__isVarRef !== true && (f as any).__goValue === undefined ? ((f as any) as __goscript_frame.Frame).messageType() : __goscript_frame.Frame.prototype.messageType.call(f))) {
		case 255:
		{
			let msg = await __goscript_errors.SystemErrCode_MetricsKey(__goscript_relay_messages.newLazyError(f).Code())
			return [false, msg]
			break
		}
		case 192:
		{
			return [false, "canceled"]
			break
		}
		case 4:
		{
			if (__goscript_relay_messages.isCallResOK(f)) {
				return [true, ""]
			}
			return [false, "application-error"]
			break
		}
		default:
		{
			return [false, ""]
			break
		}
	}
	throw new globalThis.Error("goscript: unreachable return")
}

export async function validateRelayMaxTimeout(d: time.Duration, logger: __goscript_logger.Logger | null): globalThis.Promise<time.Duration> {
	let maxMillis = $.int64Div(d, 1000000n)
	if ((maxMillis > 0n) && (maxMillis <= 4294967295n)) {
		return d
	}
	if (d == 0n) {
		return 120000000000n
	}
	void (__goscriptAwait = $.pointerValue<Exclude<__goscript_logger.Logger, null>>((__goscriptAwait = (logger !== null && (logger as any).__isVarRef !== true && (logger as any).__goValue === undefined ? (logger as Exclude<__goscript_logger.Logger, null>) : $.pointerValue<Exclude<__goscript_logger.Logger, null>>(logger)).WithFields($.arrayToSlice<__goscript_logger.LogField>([new __goscript_logger.LogField({Key: "configuredMaxTimeout", Value: $.namedValueInterfaceValue<any>(d, "time.Duration", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())}, true), new __goscript_logger.LogField({Key: "defaultMaxTimeout", Value: $.namedValueInterfaceValue<any>(120000000000n, "time.Duration", __goscriptStatic3(), __goscriptStatic4(), __goscriptStatic5())}, true)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Warn("Configured RelayMaxTimeout is invalid, using default instead."), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	return 120000000000n
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({String: (receiver: any, ...args: any[]) => (__goscript_messagetype_string.messageType_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic1$value: any
function __goscriptStatic1(): any {
	return __goscriptStatic1$value ??= (/* @__PURE__ */ $.basicType("uint8", "tchannel.messageType"))
}

var __goscriptStatic2$value: any
function __goscriptStatic2(): any {
	return __goscriptStatic2$value ??= ([$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])])
}

var __goscriptStatic3$value: any
function __goscriptStatic3(): any {
	return __goscriptStatic3$value ??= ({Abs: (receiver: any, ...args: any[]) => (time.Duration_Abs as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Hours: (receiver: any, ...args: any[]) => (time.Duration_Hours as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Microseconds: (receiver: any, ...args: any[]) => (time.Duration_Microseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Milliseconds: (receiver: any, ...args: any[]) => (time.Duration_Milliseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Minutes: (receiver: any, ...args: any[]) => (time.Duration_Minutes as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Nanoseconds: (receiver: any, ...args: any[]) => (time.Duration_Nanoseconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Round: (receiver: any, ...args: any[]) => (time.Duration_Round as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Seconds: (receiver: any, ...args: any[]) => (time.Duration_Seconds as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (time.Duration_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), Truncate: (receiver: any, ...args: any[]) => (time.Duration_Truncate as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), format: (receiver: any, ...args: any[]) => (time.Duration_format as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))})
}

var __goscriptStatic4$value: any
function __goscriptStatic4(): any {
	return __goscriptStatic4$value ??= (/* @__PURE__ */ $.basicType("int64", "time.Duration"))
}

var __goscriptStatic5$value: any
function __goscriptStatic5(): any {
	return __goscriptStatic5$value ??= ([$.methodSignature("Abs", [], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Hours", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Microseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Milliseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Minutes", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("Nanoseconds", [], [/* @__PURE__ */ $.basicType("int64")]), $.methodSignature("Round", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("Seconds", [], [/* @__PURE__ */ $.basicType("float64")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")]), $.methodSignature("Truncate", [["m", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")]), $.methodSignature("format", [["buf", /* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.arrayType(/* @__PURE__ */ $.basicType("uint8"), 32))]], [/* @__PURE__ */ $.basicType("int")])])
}

var __goscriptAwait: any
