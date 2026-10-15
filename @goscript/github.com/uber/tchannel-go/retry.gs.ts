// Generated file based on retry.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as context from "@goscript/golang.org/x/net/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as context2 from "@goscript/context/index.js"

import * as opentracing from "@goscript/github.com/opentracing/opentracing-go/index.js"

import * as relay from "@goscript/github.com/uber/tchannel-go/relay/index.js"

import type * as arg2 from "@goscript/github.com/uber/tchannel-go/thrift/arg2/index.js"

import * as tos from "@goscript/github.com/uber/tchannel-go/tos/index.js"

import * as typed from "@goscript/github.com/uber/tchannel-go/typed/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import type * as io from "@goscript/io/index.js"

import * as rand from "@goscript/math/rand/index.js"

import * as syscall from "@goscript/syscall/index.js"

import type * as __goscript__arguments from "./arguments.gs.ts"

import * as __goscript_calloptions from "./calloptions.gs.ts"

import * as __goscript_channel from "./channel.gs.ts"

import type * as __goscript_channelstate_string from "./channelstate_string.gs.ts"

import * as __goscript_checksum from "./checksum.gs.ts"

import * as __goscript_connection from "./connection.gs.ts"

import * as __goscript_connection_direction from "./connection_direction.gs.ts"

import * as __goscript_connectionstate_string from "./connectionstate_string.gs.ts"

import * as __goscript_context from "./context.gs.ts"

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

import * as __goscript_relay from "./relay.gs.ts"

import * as __goscript_relay_api from "./relay_api.gs.ts"

import * as __goscript_relay_messages from "./relay_messages.gs.ts"

import * as __goscript_relay_timer_pool from "./relay_timer_pool.gs.ts"

import * as __goscript_reqres from "./reqres.gs.ts"

import * as __goscript_reqresreaderstate_string from "./reqresreaderstate_string.gs.ts"

import * as __goscript_reqreswriterstate_string from "./reqreswriterstate_string.gs.ts"

import * as __goscript_retryon_string from "./retryon_string.gs.ts"

import * as __goscript_root_peer_list from "./root_peer_list.gs.ts"

import * as __goscript_sockio_non_unix from "./sockio_non_unix.gs.ts"

import * as __goscript_stats from "./stats.gs.ts"

import * as __goscript_subchannel from "./subchannel.gs.ts"

import type * as __goscript_systemerrcode_string from "./systemerrcode_string.gs.ts"

import * as __goscript_tracing from "./tracing.gs.ts"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "@goscript/golang.org/x/net/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/context/index.js"
import "@goscript/github.com/opentracing/opentracing-go/index.js"
import "@goscript/github.com/uber/tchannel-go/relay/index.js"
import "@goscript/github.com/uber/tchannel-go/tos/index.js"
import "@goscript/github.com/uber/tchannel-go/typed/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/math/rand/index.js"
import "@goscript/syscall/index.js"
import "./calloptions.gs.ts"
import "./channel.gs.ts"
import "./checksum.gs.ts"
import "./connection.gs.ts"
import "./connection_direction.gs.ts"
import "./connectionstate_string.gs.ts"
import "./context.gs.ts"
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
import "./relay.gs.ts"
import "./relay_api.gs.ts"
import "./relay_messages.gs.ts"
import "./relay_timer_pool.gs.ts"
import "./reqres.gs.ts"
import "./reqresreaderstate_string.gs.ts"
import "./reqreswriterstate_string.gs.ts"
import "./retryon_string.gs.ts"
import "./root_peer_list.gs.ts"
import "./sockio_non_unix.gs.ts"
import "./stats.gs.ts"
import "./subchannel.gs.ts"
import "./tracing.gs.ts"

$.registerTypePackagePath("github.com/uber/tchannel-go", ["tchannel.RetryOn", "tchannel.RequestState", "tchannel.RetriableFunc", "tchannel.RetryOptions"])

export type RetryOn = number

$.registerNamedValueType(
	"tchannel.RetryOn",
	{CanRetry: (receiver: any, ...args: any[]) => (RetryOn_CanRetry as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_retryon_string.RetryOn_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("CanRetry", [["err", "error"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*tchannel.RetryOn",
	{CanRetry: (receiver: any, ...args: any[]) => (RetryOn_CanRetry as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), String: (receiver: any, ...args: any[]) => (__goscript_retryon_string.RetryOn_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("CanRetry", [["err", "error"]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export type RetriableFunc = ((_p0: context.Context | null, _p1: RequestState | $.VarRef<RequestState> | null) => $.GoError | globalThis.Promise<$.GoError>) | null

export class RequestState {
	// Start is the time at which the request was initiated by the caller of RunWithRetry.
	public get Start(): time.Time {
		return this._fields.Start
	}

	public set Start(value: time.Time) {
		this._fields.Start = value
	}

	// SelectedPeers is a set of host:ports that have been selected previously.
	public get SelectedPeers(): globalThis.Map<string, {}> | null {
		return this._fields.SelectedPeers
	}

	public set SelectedPeers(value: globalThis.Map<string, {}> | null) {
		this._fields.SelectedPeers = value
	}

	// Attempt is 1 for the first attempt, and so on.
	public get Attempt(): number {
		return this._fields.Attempt
	}

	public set Attempt(value: number) {
		this._fields.Attempt = value
	}

	public get retryOpts(): RetryOptions | $.VarRef<RetryOptions> | null {
		return this._fields.retryOpts
	}

	public set retryOpts(value: RetryOptions | $.VarRef<RetryOptions> | null) {
		this._fields.retryOpts = value
	}

	public _fields: {
		Start: time.Time
		SelectedPeers: globalThis.Map<string, {}> | null
		Attempt: number
		retryOpts: RetryOptions | $.VarRef<RetryOptions> | null
	}

	constructor(init?: Partial<{Start?: time.Time, SelectedPeers?: globalThis.Map<string, {}> | null, Attempt?: number, retryOpts?: RetryOptions | $.VarRef<RetryOptions> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Start: init?.Start ? $.markAsStructValue($.cloneStructValue(init.Start)) : $.markAsStructValue(new time.Time()),
			SelectedPeers: init?.SelectedPeers ?? (null! as globalThis.Map<string, {}> | null),
			Attempt: init?.Attempt ?? (0 as number),
			retryOpts: init?.retryOpts ?? (null! as RetryOptions | $.VarRef<RetryOptions> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RequestState {
		return new RequestState(this, true)
	}

	public __goscriptAssign(source: RequestState): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.Start, values.Start)
		target.SelectedPeers = values.SelectedPeers
		target.Attempt = values.Attempt
		target.retryOpts = values.retryOpts
	}

	public AddSelectedPeer(hostPort: string): void {
		let rs: RequestState | $.VarRef<RequestState> | null = this;
		const rs$: RequestState = rs == null ? $.pointerTarget<RequestState>(rs) : (rs as any).__isVarRef === true ? (rs as any).value : (rs as any).__goValue === undefined ? (rs as any) : $.pointerTarget<RequestState>(rs)
		if (rs == null) {
			return
		}

		let host = getHost(hostPort)
		if ((rs$ as RequestState).SelectedPeers == null) {
			;(rs$ as RequestState).SelectedPeers = $.makeMap<string, {}>([[hostPort, {}], [host, {}]])
		} else {
			$.mapSet((rs$ as RequestState).SelectedPeers, hostPort, {})
			$.mapSet((rs$ as RequestState).SelectedPeers, host, {})
		}
	}

	public HasRetries(err: $.GoError): boolean {
		const rs: RequestState | $.VarRef<RequestState> | null = this;
		const rs$: RequestState = rs == null ? $.pointerTarget<RequestState>(rs) : (rs as any).__isVarRef === true ? (rs as any).value : (rs as any).__goValue === undefined ? (rs as any) : $.pointerTarget<RequestState>(rs)
		if (rs == null) {
			return false
		}
		let rOpts: RetryOptions | $.VarRef<RetryOptions> | null = (rs$ as RequestState).retryOpts
		let rOpts$: RetryOptions = rOpts == null ? $.pointerTarget<RetryOptions>(rOpts) : (rOpts as any).__isVarRef === true ? (rOpts as any).value : (rOpts as any).__goValue === undefined ? (rOpts as any) : $.pointerTarget<RetryOptions>(rOpts)
		return ((rs$ as RequestState).Attempt < (rOpts$ as RetryOptions).MaxAttempts) && RetryOn_CanRetry((rOpts$ as RetryOptions).RetryOn, err)
	}

	public PrevSelectedPeers(): globalThis.Map<string, {}> | null {
		const rs: RequestState | $.VarRef<RequestState> | null = this;
		if (rs == null) {
			return null
		}
		return $.pointerValue<RequestState>(rs).SelectedPeers
	}

	public RetryCount(): number {
		const rs: RequestState | $.VarRef<RequestState> | null = this;
		if (rs == null) {
			return 0
		}
		return $.pointerValue<RequestState>(rs).Attempt - 1
	}

	public SinceStart(now: time.Time, fallback: time.Duration): time.Duration {
		const rs: RequestState | $.VarRef<RequestState> | null = this;
		if (rs == null) {
			return fallback
		}
		return $.markAsStructValue($.cloneStructValue(now)).Sub($.markAsStructValue($.cloneStructValue($.pointerValue<RequestState>(rs).Start)))
	}

	static __typeInfo = $.registerStructType(
		"tchannel.RequestState",
		() => new RequestState(),
		() => [$.methodSignature("AddSelectedPeer", [["hostPort", /* @__PURE__ */ $.basicType("string")]], [], true), $.methodSignature("HasRetries", [["err", "error"]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("PrevSelectedPeers", [], [/* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Struct, methods: [], fields: [] })], true), $.methodSignature("RetryCount", [], [/* @__PURE__ */ $.basicType("int")], true), $.methodSignature("SinceStart", [["now", "time.Time"], ["fallback", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("int64", "time.Duration")], true)],
		RequestState,
		() => [/* @__PURE__ */ $.structField("Start", "time.Time", [0], 0, true), /* @__PURE__ */ $.structField("SelectedPeers", /* @__PURE__ */ $.mapType(/* @__PURE__ */ $.basicType("string"), { kind: $.TypeKind.Struct, methods: [], fields: [] }), [1], 24, true), /* @__PURE__ */ $.structField("Attempt", /* @__PURE__ */ $.basicType("int"), [2], 32, true), /* @__PURE__ */ $.structField("retryOpts", /* @__PURE__ */ $.pointerType("tchannel.RetryOptions"), [3], 40, false, { pkgPath: "github.com/uber/tchannel-go" })]
	)
}

export class RetryOptions {
	// MaxAttempts is the maximum number of calls and retries that will be made.
	// If this is 0, the default number of attempts (5) is used.
	public get MaxAttempts(): number {
		return this._fields.MaxAttempts
	}

	public set MaxAttempts(value: number) {
		this._fields.MaxAttempts = value
	}

	// RetryOn is the types of errors to retry on.
	public get RetryOn(): RetryOn {
		return this._fields.RetryOn
	}

	public set RetryOn(value: RetryOn) {
		this._fields.RetryOn = value
	}

	// TimeoutPerAttempt is the per-retry timeout to use.
	// If this is zero, then the original timeout is used.
	public get TimeoutPerAttempt(): time.Duration {
		return this._fields.TimeoutPerAttempt
	}

	public set TimeoutPerAttempt(value: time.Duration) {
		this._fields.TimeoutPerAttempt = value
	}

	public _fields: {
		MaxAttempts: number
		RetryOn: RetryOn
		TimeoutPerAttempt: time.Duration
	}

	constructor(init?: Partial<{MaxAttempts?: number, RetryOn?: RetryOn, TimeoutPerAttempt?: time.Duration}>, __goscriptValue?: boolean) {
		this._fields = {
			MaxAttempts: init?.MaxAttempts ?? (0 as number),
			RetryOn: init?.RetryOn ?? (0 as RetryOn),
			TimeoutPerAttempt: init?.TimeoutPerAttempt ?? (0n as time.Duration)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): RetryOptions {
		return new RetryOptions(this, true)
	}

	public __goscriptAssign(source: RetryOptions): void {
		const target = this._fields
		const values = source._fields
		target.MaxAttempts = values.MaxAttempts
		target.RetryOn = values.RetryOn
		target.TimeoutPerAttempt = values.TimeoutPerAttempt
	}

	static __typeInfo = $.registerStructType(
		"tchannel.RetryOptions",
		() => new RetryOptions(),
		() => [],
		RetryOptions,
		() => [/* @__PURE__ */ $.structField("MaxAttempts", /* @__PURE__ */ $.basicType("int"), [0], 0, true), /* @__PURE__ */ $.structField("RetryOn", /* @__PURE__ */ $.basicType("int", "tchannel.RetryOn"), [1], 8, true), /* @__PURE__ */ $.structField("TimeoutPerAttempt", /* @__PURE__ */ $.basicType("int64", "time.Duration"), [2], 16, true)]
	)
}

export const RetryDefault: RetryOn = 0

export const RetryConnectionError: RetryOn = 1

export const RetryNever: RetryOn = 2

export const RetryNonIdempotent: RetryOn = 3

export const RetryUnexpected: RetryOn = 4

export const RetryIdempotent: RetryOn = 5

export function isNetError(err: $.GoError): boolean {
	// TODO(prashantv): Should TChannel internally these to ErrCodeNetwork before returning
	// them to the user?
	let [, ok] = $.typeAssertTuple<net.Error | null>(err, "net.Error")
	return ok
}

export function getErrCode(err: $.GoError): __goscript_errors.SystemErrCode {
	let code = __goscript_errors.GetSystemErrorCode(err)
	if (isNetError(err)) {
		code = 7
	}
	return code
}

export function RetryOn_CanRetry(r: RetryOn, err: $.GoError): boolean {
	if (r == 2) {
		return false
	}
	if (r == 0) {
		r = 1
	}

	let code = getErrCode(err)

	if ((code == 3) || (code == 4)) {
		return true
	}
	// Never retry bad requests, since it will probably cause another bad request.
	if (code == 6) {
		return false
	}

	switch (r) {
		case 1:
		{
			return code == 7
			break
		}
		case 4:
		{
			return code == 5
			break
		}
		case 5:
		{
			return true
			break
		}
	}

	return false
}

export let defaultRetryOptions: RetryOptions | $.VarRef<RetryOptions> | null = new RetryOptions({MaxAttempts: 5})

export function __goscript_set_defaultRetryOptions(__goscriptValue: RetryOptions | $.VarRef<RetryOptions> | null): void {
	defaultRetryOptions = __goscriptValue
}

export let requestStatePool: $.VarRef<sync.Pool> = $.varRef($.markAsStructValue(new sync.Pool({New: $.functionValue((): any => {
	return $.interfaceValue(new RequestState(), "*tchannel.RequestState", /* @__PURE__ */ $.pointerType("tchannel.RequestState"))
}, ({ kind: $.TypeKind.Function, params: [], results: [{ kind: $.TypeKind.Interface, methods: [] }] } as $.FunctionTypeInfo))})))

export function __goscript_set_requestStatePool(__goscriptValue: sync.Pool): void {
	$.assignStruct(requestStatePool.value, __goscriptValue)
}

export async function getRetryOptions(ctx: context.Context | null): globalThis.Promise<RetryOptions | $.VarRef<RetryOptions> | null> {
	let params: __goscript_context.tchannelCtxParams | $.VarRef<__goscript_context.tchannelCtxParams> | null = await __goscript_context.getTChannelParams(ctx)
	if (params == null) {
		return defaultRetryOptions
	}

	let opts: RetryOptions | $.VarRef<RetryOptions> | null = $.pointerValue<__goscript_context.tchannelCtxParams>(params).retryOptions
	let opts$: RetryOptions = opts == null ? $.pointerTarget<RetryOptions>(opts) : (opts as any).__isVarRef === true ? (opts as any).value : (opts as any).__goValue === undefined ? (opts as any) : $.pointerTarget<RetryOptions>(opts)
	if (opts == null) {
		return defaultRetryOptions
	}

	if ((opts$ as RetryOptions).MaxAttempts == 0) {
		;(opts$ as RetryOptions).MaxAttempts = $.pointerValue<RetryOptions>(defaultRetryOptions).MaxAttempts
	}
	return opts
}

export function getHost(hostPort: string): string {
	for (let i = 0; i < $.stringLen(hostPort); i++) {
		if ($.indexString(hostPort, i) == 58) {
			return $.sliceStringOrBytes(hostPort, undefined, i)
		}
	}
	return hostPort
}
