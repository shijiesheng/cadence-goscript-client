// Generated file based on picker_wrapper.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as fmt from "@goscript/fmt/index.js"

import * as io from "@goscript/io/index.js"

import * as atomic from "@goscript/sync/atomic/index.js"

import * as balancer from "@goscript/google.golang.org/grpc/balancer/index.js"

import * as codes from "@goscript/google.golang.org/grpc/codes/index.js"

import * as channelz from "@goscript/google.golang.org/grpc/internal/channelz/index.js"

import * as istatus from "@goscript/google.golang.org/grpc/internal/status/index.js"

import * as transport from "@goscript/google.golang.org/grpc/internal/transport/index.js"

import * as stats from "@goscript/google.golang.org/grpc/stats/index.js"

import * as status from "@goscript/google.golang.org/grpc/status/index.js"

import * as channelz2 from "@goscript/google.golang.org/grpc/channelz/index.js"

import * as connectivity from "@goscript/google.golang.org/grpc/connectivity/index.js"

import * as credentials from "@goscript/google.golang.org/grpc/credentials/index.js"

import * as encoding from "@goscript/google.golang.org/grpc/encoding/index.js"

import * as grpclog from "@goscript/google.golang.org/grpc/grpclog/index.js"

import * as internal from "@goscript/google.golang.org/grpc/grpclog/internal/index.js"

import * as internal2 from "@goscript/google.golang.org/grpc/internal/index.js"

import * as backoff from "@goscript/google.golang.org/grpc/internal/backoff/index.js"

import * as gracefulswitch from "@goscript/google.golang.org/grpc/internal/balancer/gracefulswitch/index.js"

import * as binarylog from "@goscript/google.golang.org/grpc/internal/binarylog/index.js"

import * as grpcsync from "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"

import * as idle from "@goscript/google.golang.org/grpc/internal/idle/index.js"

import * as resolver from "@goscript/google.golang.org/grpc/internal/resolver/index.js"

import * as serviceconfig from "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"

import * as stats2 from "@goscript/google.golang.org/grpc/internal/stats/index.js"

import * as keepalive from "@goscript/google.golang.org/grpc/keepalive/index.js"

import * as mem from "@goscript/google.golang.org/grpc/mem/index.js"

import type * as metadata from "@goscript/google.golang.org/grpc/metadata/index.js"

import * as resolver2 from "@goscript/google.golang.org/grpc/resolver/index.js"

import * as serviceconfig2 from "@goscript/google.golang.org/grpc/serviceconfig/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_balancer_wrapper from "./balancer_wrapper.gs.ts"

import * as __goscript_call from "./call.gs.ts"

import * as __goscript_clientconn from "./clientconn.gs.ts"

import * as __goscript_codec from "./codec.gs.ts"

import * as __goscript_dialoptions from "./dialoptions.gs.ts"

import * as __goscript_interceptor from "./interceptor.gs.ts"

import * as __goscript_resolver_wrapper from "./resolver_wrapper.gs.ts"

import * as __goscript_rpc_util from "./rpc_util.gs.ts"

import * as __goscript_server from "./server.gs.ts"

import * as __goscript_service_config from "./service_config.gs.ts"

import * as __goscript_stream from "./stream.gs.ts"

import * as __goscript_trace from "./trace.gs.ts"
import "@goscript/context/index.js"
import "@goscript/fmt/index.js"
import "@goscript/io/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/google.golang.org/grpc/balancer/index.js"
import "@goscript/google.golang.org/grpc/codes/index.js"
import "@goscript/google.golang.org/grpc/internal/channelz/index.js"
import "@goscript/google.golang.org/grpc/internal/status/index.js"
import "@goscript/google.golang.org/grpc/internal/transport/index.js"
import "@goscript/google.golang.org/grpc/stats/index.js"
import "@goscript/google.golang.org/grpc/status/index.js"
import "@goscript/google.golang.org/grpc/channelz/index.js"
import "@goscript/google.golang.org/grpc/connectivity/index.js"
import "@goscript/google.golang.org/grpc/credentials/index.js"
import "@goscript/google.golang.org/grpc/encoding/index.js"
import "@goscript/google.golang.org/grpc/grpclog/index.js"
import "@goscript/google.golang.org/grpc/grpclog/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/index.js"
import "@goscript/google.golang.org/grpc/internal/backoff/index.js"
import "@goscript/google.golang.org/grpc/internal/balancer/gracefulswitch/index.js"
import "@goscript/google.golang.org/grpc/internal/binarylog/index.js"
import "@goscript/google.golang.org/grpc/internal/grpcsync/index.js"
import "@goscript/google.golang.org/grpc/internal/idle/index.js"
import "@goscript/google.golang.org/grpc/internal/resolver/index.js"
import "@goscript/google.golang.org/grpc/internal/serviceconfig/index.js"
import "@goscript/google.golang.org/grpc/internal/stats/index.js"
import "@goscript/google.golang.org/grpc/keepalive/index.js"
import "@goscript/google.golang.org/grpc/mem/index.js"
import "@goscript/google.golang.org/grpc/resolver/index.js"
import "@goscript/google.golang.org/grpc/serviceconfig/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"
import "@goscript/time/index.js"
import "./balancer_wrapper.gs.ts"
import "./call.gs.ts"
import "./clientconn.gs.ts"
import "./codec.gs.ts"
import "./dialoptions.gs.ts"
import "./interceptor.gs.ts"
import "./resolver_wrapper.gs.ts"
import "./rpc_util.gs.ts"
import "./server.gs.ts"
import "./service_config.gs.ts"
import "./stream.gs.ts"
import "./trace.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc", ["grpc.pickerGeneration", "grpc.pickerWrapper", "grpc.dropError"])

export class pickerGeneration {
	// picker is the picker produced by the LB policy.  May be nil if a picker
	// has never been produced.
	public get picker(): balancer.Picker | null {
		return this._fields.picker
	}

	public set picker(value: balancer.Picker | null) {
		this._fields.picker = value
	}

	// blockingCh is closed when the picker has been invalidated because there
	// is a new one available.
	public get blockingCh(): $.Channel<{}> | null {
		return this._fields.blockingCh
	}

	public set blockingCh(value: $.Channel<{}> | null) {
		this._fields.blockingCh = value
	}

	public _fields: {
		picker: balancer.Picker | null
		blockingCh: $.Channel<{}> | null
	}

	constructor(init?: Partial<{picker?: balancer.Picker | null, blockingCh?: $.Channel<{}> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			picker: init?.picker ?? (null! as balancer.Picker | null),
			blockingCh: init?.blockingCh ?? (null! as $.Channel<{}> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pickerGeneration {
		return new pickerGeneration(this, true)
	}

	public __goscriptAssign(source: pickerGeneration): void {
		const target = this._fields
		const values = source._fields
		target.picker = $.assignFieldValue(target.picker, values.picker, "balancer.Picker")
		target.blockingCh = values.blockingCh
	}

	static __typeInfo = $.registerStructType(
		"grpc.pickerGeneration",
		() => new pickerGeneration(),
		() => [],
		pickerGeneration,
		() => [/* @__PURE__ */ $.structField("picker", "balancer.Picker", [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("blockingCh", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [1], 16, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class pickerWrapper {
	// If pickerGen holds a nil pointer, the pickerWrapper is closed.
	public get pickerGen(): atomic.Pointer<pickerGeneration> {
		return this._fields.pickerGen
	}

	public set pickerGen(value: atomic.Pointer<pickerGeneration>) {
		this._fields.pickerGen = value
	}

	public get statsHandlers(): $.Slice<stats.Handler | null> {
		return this._fields.statsHandlers
	}

	public set statsHandlers(value: $.Slice<stats.Handler | null>) {
		this._fields.statsHandlers = value
	}

	public _fields: {
		pickerGen: atomic.Pointer<pickerGeneration>
		statsHandlers: $.Slice<stats.Handler | null>
	}

	constructor(init?: Partial<{pickerGen?: atomic.Pointer<pickerGeneration>, statsHandlers?: $.Slice<stats.Handler | null>}>, __goscriptValue?: boolean) {
		this._fields = {
			pickerGen: init?.pickerGen ? $.markAsStructValue($.cloneStructValue(init.pickerGen)) : $.markAsStructValue(new atomic.Pointer<pickerGeneration>()),
			statsHandlers: init?.statsHandlers ?? (null! as $.Slice<stats.Handler | null>)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): pickerWrapper {
		return new pickerWrapper(this, true)
	}

	public __goscriptAssign(source: pickerWrapper): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.pickerGen, values.pickerGen)
		target.statsHandlers = values.statsHandlers
	}

	public close(): void {
		const pw: pickerWrapper | $.VarRef<pickerWrapper> | null = this;
		let old: pickerGeneration | $.VarRef<pickerGeneration> | null = ($.pointerValue<pickerWrapper>(pw).pickerGen.Swap(null) as pickerGeneration | $.VarRef<pickerGeneration> | null)
		$.pointerValue<pickerGeneration>(old).blockingCh!.close()
	}

	public async pick(ctx: context.Context | null, failfast: boolean, info: balancer.PickInfo): globalThis.Promise<[transport.ClientTransport | null, balancer.PickResult, $.GoError]> {
		const pw: pickerWrapper | $.VarRef<pickerWrapper> | null = this;
		const pw$: pickerWrapper = pw == null ? $.pointerTarget<pickerWrapper>(pw) : (pw as any).__isVarRef === true ? (pw as any).value : (pw as any).__goValue === undefined ? (pw as any) : $.pointerTarget<pickerWrapper>(pw)
		let ch: $.Channel<{}> | null = null! as $.Channel<{}> | null

		let lastPickErr: $.GoError = null! as $.GoError

		while (true) {
			let pg: pickerGeneration | $.VarRef<pickerGeneration> | null = ((pw$ as pickerWrapper).pickerGen.Load() as pickerGeneration | $.VarRef<pickerGeneration> | null)
			let pg$: pickerGeneration = pg == null ? $.pointerTarget<pickerGeneration>(pg) : (pg as any).__isVarRef === true ? (pg as any).value : (pg as any).__goValue === undefined ? (pg as any) : $.pointerTarget<pickerGeneration>(pg)
			if (pg == null) {
				return [null, new balancer.PickResult(undefined, true), __goscript_clientconn.ErrClientConnClosing]
			}
			if ((pg$ as pickerGeneration).picker == null) {
				ch = (pg$ as pickerGeneration).blockingCh
			}
			if (ch == (pg$ as pickerGeneration).blockingCh) {
				// This could happen when either:
				// - pw.picker is nil (the previous if condition), or
				// - we have already called pick on the current picker.
				const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, [transport.ClientTransport | null, balancer.PickResult, $.GoError]>([
					{
						id: 0,
						isSend: false,
						channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
						onSelected: async (__goscriptSelect0Result) => {
							let errStr: string = ""
							if (lastPickErr != null) {
								errStr = $.concatString("latest balancer error: ", (__goscriptAwait = (lastPickErr !== null && (lastPickErr as any).__isVarRef !== true && (lastPickErr as any).__goValue === undefined ? (lastPickErr as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(lastPickErr)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
							} else {
								errStr = await fmt.Sprintf("received context error while waiting for new LB policy update: %s", (__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))
							}
							{
								let __goscriptSwitch0 = (__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
								switch ((true as boolean)) {
									case $.comparableEqual(__goscriptSwitch0, context.DeadlineExceeded):
									{
										return [null, new balancer.PickResult(undefined, true), status.Error(4, errStr)]
										break
									}
									case $.comparableEqual(__goscriptSwitch0, context.Canceled):
									{
										return [null, new balancer.PickResult(undefined, true), status.Error(1, errStr)]
										break
									}
								}
							}
						}
					},
					{
						id: 1,
						isSend: false,
						channel: ch,
					}
				], false)
				if (__goscriptSelect0HasReturn) {
					return __goscriptSelect0Value
				}
				continue
			}

			// If the channel is set, it means that the pick call had to wait for a
			// new picker at some point. Either it's the first iteration and this
			// function received the first picker, or a picker errored with
			// ErrNoSubConnAvailable or errored with failfast set to false, which
			// will trigger a continue to the next iteration. In the first case this
			// conditional will hit if this call had to block (the channel is set).
			// In the second case, the only way it will get to this conditional is
			// if there is a new picker.
			if (ch != null) {
				for (let __goscriptRangeTarget0 = (pw$ as pickerWrapper).statsHandlers, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
					let sh = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as stats.Handler | null)
					void (__goscriptAwait = (sh !== null && (sh as any).__isVarRef !== true && (sh as any).__goValue === undefined ? (sh as Exclude<stats.Handler, null>) : $.pointerValue<Exclude<stats.Handler, null>>(sh)).HandleRPC(ctx, $.interfaceValue<stats.RPCStats | null>(new stats.PickerUpdated(), "*stats.PickerUpdated", /* @__PURE__ */ $.pointerType("stats.PickerUpdated"))), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				}
			}

			ch = (pg$ as pickerGeneration).blockingCh
			let p = (pg$ as pickerGeneration).picker

			let __goscriptTuple0: any = await (p !== null && (p as any).__isVarRef !== true && (p as any).__goValue === undefined ? (p as Exclude<balancer.Picker, null>) : $.pointerValue<Exclude<balancer.Picker, null>>(p)).Pick((info).clone())
			let pickResult = $.varRef(__goscriptTuple0[0])
			let err = __goscriptTuple0[1]
			if (err != null) {
				if ($.comparableEqual(err, balancer.ErrNoSubConnAvailable)) {
					continue
				}
				{
					let __goscriptTuple1: any = await status.FromError(err)
					let st: istatus.Status | $.VarRef<istatus.Status> | null = __goscriptTuple1[0]
					let ok = __goscriptTuple1[1]
					if (ok) {
						// Status error: end the RPC unconditionally with this status.
						// First restrict the code to the list allowed by gRFC A54.
						if (istatus.IsRestrictedControlPlaneCode(st)) {
							err = await status.Errorf(13, "received picker error with illegal status: %v", $.arrayToSlice<any>([(err as any)]))
						}
						return [null, new balancer.PickResult(undefined, true), $.interfaceValue<$.GoError>(new dropError({error: err}, true), "grpc.dropError", "grpc.dropError")]
					}
				}
				// For all other errors, wait for ready RPCs should block and other
				// RPCs should fail with unavailable.
				if (!failfast) {
					lastPickErr = err
					continue
				}
				return [null, new balancer.PickResult(undefined, true), status.Error(14, (__goscriptAwait = (err !== null && (err as any).__isVarRef !== true && (err as any).__goValue === undefined ? (err as Exclude<$.GoError, null>) : $.pointerValue<Exclude<$.GoError, null>>(err)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait))]
			}

			let __goscriptTuple2: any = $.typeAssertTuple<__goscript_balancer_wrapper.acBalancerWrapper | $.VarRef<__goscript_balancer_wrapper.acBalancerWrapper> | null>(pickResult.value.SubConn, /* @__PURE__ */ $.pointerType("grpc.acBalancerWrapper"))
			let acbw: __goscript_balancer_wrapper.acBalancerWrapper | $.VarRef<__goscript_balancer_wrapper.acBalancerWrapper> | null = __goscriptTuple2[0]
			let ok = __goscriptTuple2[1]
			if (!ok) {
				void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).Errorf("subconn returned from pick is type %T, not *acBalancerWrapper", $.arrayToSlice<any>([(pickResult.value.SubConn as any)])), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
				continue
			}
			{
				let t = await __goscript_clientconn.addrConn.prototype.getReadyTransport.call($.pointerValue<__goscript_balancer_wrapper.acBalancerWrapper>(acbw).ac)
				if (t != null) {
					if (channelz.IsOn()) {
						doneChannelzWrapper(acbw, pickResult)
						return [t, (pickResult.value).clone(), null]
					}
					return [t, (pickResult.value).clone(), null]
				}
			}
			if (pickResult.value.Done != null) {
				// Calling done with nil error, no bytes sent and no bytes received.
				// DoneInfo with default value works.
				void (__goscriptAwait = pickResult.value.Done!(new balancer.DoneInfo(undefined, true)), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}
			void (__goscriptAwait = $.pointerValue<Exclude<grpclog.DepthLoggerV2, null>>(__goscript_server.logger).Infof("blockingPicker: the picked transport is not ready, loop back to repick", null), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		throw new globalThis.Error("goscript: unreachable return")
	}

	public reset(): void {
		const pw: pickerWrapper | $.VarRef<pickerWrapper> | null = this;
		let old: pickerGeneration | $.VarRef<pickerGeneration> | null = ($.pointerValue<pickerWrapper>(pw).pickerGen.Swap(new pickerGeneration({blockingCh: $.makeChannel<{}>(0, {}, "both")})) as pickerGeneration | $.VarRef<pickerGeneration> | null)
		$.pointerValue<pickerGeneration>(old).blockingCh!.close()
	}

	public updatePicker(p: balancer.Picker | null): void {
		const pw: pickerWrapper | $.VarRef<pickerWrapper> | null = this;
		let old: pickerGeneration | $.VarRef<pickerGeneration> | null = ($.pointerValue<pickerWrapper>(pw).pickerGen.Swap(new pickerGeneration({picker: p, blockingCh: $.makeChannel<{}>(0, {}, "both")})) as pickerGeneration | $.VarRef<pickerGeneration> | null)
		$.pointerValue<pickerGeneration>(old).blockingCh!.close()
	}

	static __typeInfo = $.registerStructType(
		"grpc.pickerWrapper",
		() => new pickerWrapper(),
		() => [$.methodSignature("close", [], [], true), $.methodSignature("pick", [["ctx", "context.Context"], ["failfast", /* @__PURE__ */ $.basicType("bool")], ["info", "balancer.PickInfo"]], ["transport.ClientTransport", "balancer.PickResult", "error"], true), $.methodSignature("reset", [], [], true), $.methodSignature("updatePicker", [["p", "balancer.Picker"]], [], true)],
		pickerWrapper,
		() => [/* @__PURE__ */ $.structField("pickerGen", "atomic.Pointer", [0], 0, false, { pkgPath: "google.golang.org/grpc" }), /* @__PURE__ */ $.structField("statsHandlers", /* @__PURE__ */ $.sliceType("stats.Handler"), [1], 8, false, { pkgPath: "google.golang.org/grpc" })]
	)
}

export class dropError {
	public get error(): $.GoError {
		return this._fields.error
	}

	public set error(value: $.GoError) {
		this._fields.error = value
	}

	public _fields: {
		error: $.GoError
	}

	constructor(init?: Partial<{error?: $.GoError}>, __goscriptValue?: boolean) {
		this._fields = {
			error: init?.error ?? (null! as $.GoError)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): dropError {
		return new dropError(this, true)
	}

	public __goscriptAssign(source: dropError): void {
		const target = this._fields
		const values = source._fields
		target.error = $.assignFieldValue(target.error, values.error, "error")
	}

	public async Error(): globalThis.Promise<any> {
		return await $.pointerValue<Exclude<$.GoError, null>>(this.error).Error()
	}

	static __typeInfo = $.registerStructType(
		"grpc.dropError",
		() => new dropError(),
		() => [$.methodSignature("Error", [], [/* @__PURE__ */ $.basicType("string")])],
		dropError,
		() => [/* @__PURE__ */ $.structField("error", "error", [0], 0, false, { pkgPath: "google.golang.org/grpc", anonymous: true })]
	)
}

export function newPickerWrapper(statsHandlers: $.Slice<stats.Handler | null>): pickerWrapper | $.VarRef<pickerWrapper> | null {
	let pw: pickerWrapper | $.VarRef<pickerWrapper> | null = new pickerWrapper({statsHandlers: statsHandlers})
	$.pointerValue<pickerWrapper>(pw).pickerGen.Store(new pickerGeneration({blockingCh: $.makeChannel<{}>(0, {}, "both")}))
	return pw
}

export function doneChannelzWrapper(acbw: __goscript_balancer_wrapper.acBalancerWrapper | $.VarRef<__goscript_balancer_wrapper.acBalancerWrapper> | null, result: balancer.PickResult | $.VarRef<balancer.PickResult> | null): void {
	const result$: balancer.PickResult = result == null ? $.pointerTarget<balancer.PickResult>(result) : (result as any).__isVarRef === true ? (result as any).value : (result as any).__goValue === undefined ? (result as any) : $.pointerTarget<balancer.PickResult>(result)
	let ac: __goscript_clientconn.addrConn | $.VarRef<__goscript_clientconn.addrConn> | null = $.pointerValue<__goscript_balancer_wrapper.acBalancerWrapper>(acbw).ac
	void (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as __goscript_clientconn.addrConn).incrCallsStarted() : __goscript_clientconn.addrConn.prototype.incrCallsStarted.call(ac))
	let done: ((_p0: balancer.DoneInfo) => void) | null = (result$ as balancer.PickResult).Done;
	;(result$ as balancer.PickResult).Done = $.functionValue(async (b: balancer.DoneInfo): globalThis.Promise<void> => {
		if ((b.Err != null) && (!$.comparableEqual(b.Err, io.EOF))) {
			void (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as __goscript_clientconn.addrConn).incrCallsFailed() : __goscript_clientconn.addrConn.prototype.incrCallsFailed.call(ac))
		} else {
			void (ac !== null && (ac as any).__isVarRef !== true && (ac as any).__goValue === undefined ? ((ac as any) as __goscript_clientconn.addrConn).incrCallsSucceeded() : __goscript_clientconn.addrConn.prototype.incrCallsSucceeded.call(ac))
		}
		if (done != null) {
			void (__goscriptAwait = done!((b).clone()), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}, ({ kind: $.TypeKind.Function, params: ["balancer.DoneInfo"], results: [] } as $.FunctionTypeInfo))
}

var __goscriptStatic0$value: any
function __goscriptStatic0(): any {
	return __goscriptStatic0$value ??= ({[$.genericTypeArgsMarker]: $.genericTypeArgsBrand, T: { type: "grpc.pickerGeneration", zero: () => new pickerGeneration(undefined, true) }})
}

var __goscriptAwait: any
