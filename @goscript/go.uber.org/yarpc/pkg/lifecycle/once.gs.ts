// Generated file based on once.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as errors from "@goscript/errors/index.js"

import * as syncatomic from "@goscript/sync/atomic/index.js"

import * as atomic from "@goscript/go.uber.org/atomic/index.js"

import * as yarpcerrors from "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"

import * as strconv from "@goscript/strconv/index.js"

import type * as time from "@goscript/time/index.js"

import * as __goscript_state_string from "./state_string.gs.ts"
import "@goscript/context/index.js"
import "@goscript/errors/index.js"
import "@goscript/sync/atomic/index.js"
import "@goscript/go.uber.org/atomic/index.js"
import "@goscript/go.uber.org/yarpc/yarpcerrors/index.js"
import "@goscript/strconv/index.js"
import "./state_string.gs.ts"

$.registerTypePackagePath("go.uber.org/yarpc/pkg/lifecycle", ["lifecycle.State", "lifecycle.Once"])

export type State = number

$.registerNamedValueType(
	"lifecycle.State",
	{String: (receiver: any, ...args: any[]) => (__goscript_state_string.State_String as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

$.registerNamedValueType(
	"*lifecycle.State",
	{String: (receiver: any, ...args: any[]) => (__goscript_state_string.State_String as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("String", [], [/* @__PURE__ */ $.basicType("string")])]
);

export class Once {
	// startCh closes to allow goroutines to resume after the lifecycle is in
	// the Running state or beyond.
	public get startCh(): $.Channel<{}> | null {
		return this._fields.startCh
	}

	public set startCh(value: $.Channel<{}> | null) {
		this._fields.startCh = value
	}

	// stoppingCh closes to allow goroutines to resume after the lifecycle is
	// in the Stopping state or beyond.
	public get stoppingCh(): $.Channel<{}> | null {
		return this._fields.stoppingCh
	}

	public set stoppingCh(value: $.Channel<{}> | null) {
		this._fields.stoppingCh = value
	}

	// stopCh closes to allow goroutines to resume after the lifecycle is in
	// the Stopped state or Errored.
	public get stopCh(): $.Channel<{}> | null {
		return this._fields.stopCh
	}

	public set stopCh(value: $.Channel<{}> | null) {
		this._fields.stopCh = value
	}

	// err is the error, if any, that Start() or Stop() returned and all
	// subsequent Start() or Stop() calls will return. The right to set
	// err is conferred to whichever goroutine is starting or stopping, until
	// it has started or stopped, after which `err` becomes immutable.
	public get err(): syncatomic.Value {
		return this._fields.err
	}

	public set err(value: syncatomic.Value) {
		this._fields.err = value
	}

	// state is an atomic State representing the object's current
	// state (Idle, Starting, Running, Stopping, Stopped, Errored).
	public get state(): atomic.Int32 {
		return this._fields.state
	}

	public set state(value: atomic.Int32) {
		this._fields.state = value
	}

	public _fields: {
		startCh: $.Channel<{}> | null
		stoppingCh: $.Channel<{}> | null
		stopCh: $.Channel<{}> | null
		err: syncatomic.Value
		state: atomic.Int32
	}

	constructor(init?: Partial<{startCh?: $.Channel<{}> | null, stoppingCh?: $.Channel<{}> | null, stopCh?: $.Channel<{}> | null, err?: syncatomic.Value, state?: atomic.Int32}>, __goscriptValue?: boolean) {
		this._fields = {
			startCh: init?.startCh ?? (null! as $.Channel<{}> | null),
			stoppingCh: init?.stoppingCh ?? (null! as $.Channel<{}> | null),
			stopCh: init?.stopCh ?? (null! as $.Channel<{}> | null),
			err: init?.err ? $.markAsStructValue($.cloneStructValue(init.err)) : $.markAsStructValue(new syncatomic.Value()),
			state: init?.state ? init.state.clone() : new atomic.Int32(undefined, true)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Once {
		return new Once(this, true)
	}

	public __goscriptAssign(source: Once): void {
		const target = this._fields
		const values = source._fields
		target.startCh = values.startCh
		target.stoppingCh = values.stoppingCh
		target.stopCh = values.stopCh
		$.assignStruct(target.err, values.err)
		$.assignStruct(target.state, values.state)
	}

	public IsRunning(): boolean {
		const o: Once | $.VarRef<Once> | null = this;
		return (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as Once).State() : Once.prototype.State.call(o)) == 2
	}

	public async Start(f: (() => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
		const o: Once | $.VarRef<Once> | null = this;
		const o$: Once = o == null ? $.pointerTarget<Once>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<Once>(o)
		if ((o$ as Once).state.CompareAndSwap(0, 1)) {
			let err: $.GoError = null! as $.GoError
			if (f != null) {
				err = (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}

			// skip forward to error state
			if (err != null) {
				void (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as Once).setError(err) : Once.prototype.setError.call(o, err))
				void (o$ as Once).state.Store(5)
				void (o$ as Once).stoppingCh!.close()
				void (o$ as Once).stopCh!.close()
			} else {
				void (o$ as Once).state.Store(2)
			}
			void (o$ as Once).startCh!.close()

			return err
		}

		await $.chanRecv((o$ as Once).startCh)
		return (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as Once).loadError() : Once.prototype.loadError.call(o))
	}

	public Started(): $.Channel<{}> | null {
		const o: Once | $.VarRef<Once> | null = this;
		return $.pointerValue<Once>(o).startCh
	}

	public State(): State {
		const o: Once | $.VarRef<Once> | null = this;
		return $.int($.pointerValue<Once>(o).state.Load())
	}

	public async Stop(f: (() => $.GoError | globalThis.Promise<$.GoError>) | null): globalThis.Promise<$.GoError> {
		const o: Once | $.VarRef<Once> | null = this;
		const o$: Once = o == null ? $.pointerTarget<Once>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<Once>(o)
		if ((o$ as Once).state.CompareAndSwap(0, 4)) {
			void (o$ as Once).startCh!.close()
			void (o$ as Once).stoppingCh!.close()
			void (o$ as Once).stopCh!.close()
			return null
		}

		await $.chanRecv((o$ as Once).startCh)

		if ((o$ as Once).state.CompareAndSwap(2, 3)) {
			void (o$ as Once).stoppingCh!.close()

			let err: $.GoError = null! as $.GoError
			if (f != null) {
				err = (__goscriptAwait = f!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}

			if (err != null) {
				void (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as Once).setError(err) : Once.prototype.setError.call(o, err))
				void (o$ as Once).state.Store(5)
			} else {
				void (o$ as Once).state.Store(4)
			}
			void (o$ as Once).stopCh!.close()
			return err
		}

		await $.chanRecv((o$ as Once).stopCh)
		return (o !== null && (o as any).__isVarRef !== true && (o as any).__goValue === undefined ? ((o as any) as Once).loadError() : Once.prototype.loadError.call(o))
	}

	public Stopped(): $.Channel<{}> | null {
		const o: Once | $.VarRef<Once> | null = this;
		return $.pointerValue<Once>(o).stopCh
	}

	public Stopping(): $.Channel<{}> | null {
		const o: Once | $.VarRef<Once> | null = this;
		return $.pointerValue<Once>(o).stoppingCh
	}

	public async WaitUntilRunning(ctx: context.Context | null): globalThis.Promise<$.GoError> {
		const o: Once | $.VarRef<Once> | null = this;
		const o$: Once = o == null ? $.pointerTarget<Once>(o) : (o as any).__isVarRef === true ? (o as any).value : (o as any).__goValue === undefined ? (o as any) : $.pointerTarget<Once>(o)
		let state = $.int((o$ as Once).state.Load())
		if (state == 2) {
			return null
		}
		if (state > 2) {
			return yarpcerrors.FailedPreconditionErrorf("could not wait for instance to start running: current state is %q", $.arrayToSlice<any>([getStateName(state)]))
		}

		{
			let [, ok] = await (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Deadline()
			if (!ok) {
				return yarpcerrors.InvalidArgumentErrorf("could not wait for instance to start running: deadline required on request context", null)
			}
		}

		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, $.GoError>([
			{
				id: 0,
				isSend: false,
				channel: (o$ as Once).startCh,
				onSelected: async (__goscriptSelect0Result) => {
					let __goscriptShadow0 = $.int((o$ as Once).state.Load())
					if (__goscriptShadow0 == 2) {
						return null
					}
					return yarpcerrors.FailedPreconditionErrorf("instance did not enter running state, current state is %q", $.arrayToSlice<any>([getStateName(__goscriptShadow0)]))
				}
			},
			{
				id: 1,
				isSend: false,
				channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				onSelected: async (__goscriptSelect0Result) => {
					return yarpcerrors.FailedPreconditionErrorf("context finished while waiting for instance to start: %s", $.arrayToSlice<any>([(__goscriptAwait = $.pointerValue<Exclude<$.GoError, null>>((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Error(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)]))
				}
			}
		], false)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
		throw new globalThis.Error("unreachable select")
		throw new globalThis.Error("goscript: unreachable return")
	}

	public loadError(): $.GoError {
		const o: Once | $.VarRef<Once> | null = this;
		let errVal = $.pointerValue<Once>(o).err.Load()
		if (errVal == null) {
			return null
		}

		{
			let [err, ok] = $.typeAssertTuple<$.GoError>(errVal, "error")
			if (ok) {
				return err
			}
		}

		// TODO replace with DPanic log
		return errors.New("lifecycle err was not `error` type")
	}

	public setError(err: $.GoError): void {
		const o: Once | $.VarRef<Once> | null = this;
		$.pointerValue<Once>(o).err.Store((err as any))
	}

	static __typeInfo = $.registerStructType(
		"lifecycle.Once",
		() => new Once(),
		() => [$.methodSignature("IsRunning", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Start", [["f", ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("Started", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")], true), $.methodSignature("State", [], [/* @__PURE__ */ $.basicType("int", "lifecycle.State")], true), $.methodSignature("Stop", [["f", ({ kind: $.TypeKind.Function, params: [], results: ["error"] } as $.FunctionTypeInfo)]], ["error"], true), $.methodSignature("Stopped", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")], true), $.methodSignature("Stopping", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")], true), $.methodSignature("WaitUntilRunning", [["ctx", "context.Context"]], ["error"], true), $.methodSignature("loadError", [], ["error"], true), $.methodSignature("setError", [["err", "error"]], [], true)],
		Once,
		() => [/* @__PURE__ */ $.structField("startCh", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [0], 0, false, { pkgPath: "go.uber.org/yarpc/pkg/lifecycle" }), /* @__PURE__ */ $.structField("stoppingCh", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [1], 8, false, { pkgPath: "go.uber.org/yarpc/pkg/lifecycle" }), /* @__PURE__ */ $.structField("stopCh", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [2], 16, false, { pkgPath: "go.uber.org/yarpc/pkg/lifecycle" }), /* @__PURE__ */ $.structField("err", "atomic.Value", [3], 24, false, { pkgPath: "go.uber.org/yarpc/pkg/lifecycle" }), /* @__PURE__ */ $.structField("state", "atomic.Int32", [4], 40, false, { pkgPath: "go.uber.org/yarpc/pkg/lifecycle" })]
	)
}

export const Idle: State = 0

export const Starting: State = 1

export const Running: State = 2

export const Stopping: State = 3

export const Stopped: State = 4

export const Errored: State = 5

export let stateToName: globalThis.Map<State, string> | null = $.makeMap<State, string>([[0, "idle"], [1, "starting"], [2, "running"], [3, "stopping"], [4, "stopped"], [5, "errored"]])

export function __goscript_set_stateToName(__goscriptValue: globalThis.Map<State, string> | null): void {
	stateToName = __goscriptValue
}

export function getStateName(s: State): string {
	{
		let [name, ok] = $.mapGet<State, string, string>(stateToName, s, "")
		if (ok) {
			return name
		}
	}
	return "unknown"
}

export function NewOnce(): Once | $.VarRef<Once> | null {
	return new Once({startCh: $.makeChannel<{}>(0, {}, "both"), stoppingCh: $.makeChannel<{}>(0, {}, "both"), stopCh: $.makeChannel<{}>(0, {}, "both")})
}

var __goscriptAwait: any
