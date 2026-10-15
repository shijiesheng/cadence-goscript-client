// Generated file based on callback_serializer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as buffer from "@goscript/google.golang.org/grpc/internal/buffer/index.js"
import "@goscript/context/index.js"
import "@goscript/google.golang.org/grpc/internal/buffer/index.js"

$.registerTypePackagePath("google.golang.org/grpc/internal/grpcsync", ["grpcsync.CallbackSerializer"])

export class CallbackSerializer {
	// done is closed once the serializer is shut down completely, i.e all
	// scheduled callbacks are executed and the serializer has deallocated all
	// its resources.
	public get done(): $.Channel<{}> | null {
		return this._fields.done
	}

	public set done(value: $.Channel<{}> | null) {
		this._fields.done = value
	}

	public get callbacks(): buffer.Unbounded | $.VarRef<buffer.Unbounded> | null {
		return this._fields.callbacks
	}

	public set callbacks(value: buffer.Unbounded | $.VarRef<buffer.Unbounded> | null) {
		this._fields.callbacks = value
	}

	public _fields: {
		done: $.Channel<{}> | null
		callbacks: buffer.Unbounded | $.VarRef<buffer.Unbounded> | null
	}

	constructor(init?: Partial<{done?: $.Channel<{}> | null, callbacks?: buffer.Unbounded | $.VarRef<buffer.Unbounded> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			done: init?.done ?? (null! as $.Channel<{}> | null),
			callbacks: init?.callbacks ?? (null! as buffer.Unbounded | $.VarRef<buffer.Unbounded> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): CallbackSerializer {
		return new CallbackSerializer(this, true)
	}

	public __goscriptAssign(source: CallbackSerializer): void {
		const target = this._fields
		const values = source._fields
		target.done = values.done
		target.callbacks = values.callbacks
	}

	public Done(): $.Channel<{}> | null {
		const cs: CallbackSerializer | $.VarRef<CallbackSerializer> | null = this;
		return $.pointerValue<CallbackSerializer>(cs).done
	}

	public async ScheduleOr(f: ((ctx: context.Context | null) => void) | null, onFailure: (() => void) | null): globalThis.Promise<void> {
		const cs: CallbackSerializer | $.VarRef<CallbackSerializer> | null = this;
		if (await buffer.Unbounded.prototype.Put.call($.pointerValue<CallbackSerializer>(cs).callbacks, $.interfaceValue(f, "func(ctx context.Context)", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo))) != null) {
			void (__goscriptAwait = onFailure!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	public async TrySchedule(f: ((ctx: context.Context | null) => void) | null): globalThis.Promise<void> {
		const cs: CallbackSerializer | $.VarRef<CallbackSerializer> | null = this;
		await buffer.Unbounded.prototype.Put.call($.pointerValue<CallbackSerializer>(cs).callbacks, $.interfaceValue(f, "func(ctx context.Context)", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo)))
	}

	public async run(ctx: context.Context | null): globalThis.Promise<void> {
		const cs: CallbackSerializer | $.VarRef<CallbackSerializer> | null = this;
		using __defer = new $.DisposableStack()
		const cs$: CallbackSerializer = cs == null ? $.pointerTarget<CallbackSerializer>(cs) : (cs as any).__isVarRef === true ? (cs as any).value : (cs as any).__goValue === undefined ? (cs as any) : $.pointerTarget<CallbackSerializer>(cs)
		const __goscriptDeferArg0 = (cs$ as CallbackSerializer).done
		__defer.defer(() => { __goscriptDeferArg0!.close() })

		// TODO: when Go 1.21 is the oldest supported version, this loop and Close
		// can be replaced with:
		//
		// context.AfterFunc(ctx, cs.callbacks.Close)
		while ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Err(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) == null) {
			const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, void>([
				{
					id: 0,
					isSend: false,
					channel: ((__goscriptAwait = (ctx !== null && (ctx as any).__isVarRef !== true && (ctx as any).__goValue === undefined ? (ctx as Exclude<context.Context, null>) : $.pointerValue<Exclude<context.Context, null>>(ctx)).Done(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) as $.Channel<{}> | null),
				},
				{
					id: 1,
					isSend: false,
					channel: buffer.Unbounded.prototype.Get.call((cs$ as CallbackSerializer).callbacks),
					onSelected: async (__goscriptSelect0Result) => {
						let cb = __goscriptSelect0Result.value
						await buffer.Unbounded.prototype.Load.call((cs$ as CallbackSerializer).callbacks)
						void (__goscriptAwait = $.mustTypeAssert<((_p0: context.Context | null) => void) | null>(cb, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo))!(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
					}
				}
			], false)
			if (__goscriptSelect0HasReturn) {
				return __goscriptSelect0Value
			}
		}

		// Close the buffer to prevent new callbacks from being added.
		await buffer.Unbounded.prototype.Close.call((cs$ as CallbackSerializer).callbacks)

		// Run all pending callbacks.
		while (true) {
			let __goscriptRange0 = await $.chanRecvWithOk(buffer.Unbounded.prototype.Get.call((cs$ as CallbackSerializer).callbacks))
			if (!__goscriptRange0.ok) {
				break
			}
			let cb = __goscriptRange0.value
			await buffer.Unbounded.prototype.Load.call((cs$ as CallbackSerializer).callbacks)
			void (__goscriptAwait = $.mustTypeAssert<((_p0: context.Context | null) => void) | null>(cb, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo))!(ctx), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
	}

	static __typeInfo = $.registerStructType(
		"grpcsync.CallbackSerializer",
		() => new CallbackSerializer(),
		() => [$.methodSignature("Done", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")], true), $.methodSignature("ScheduleOr", [["f", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo)], ["onFailure", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("TrySchedule", [["f", ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo)]], [], true), $.methodSignature("run", [["ctx", "context.Context"]], [], true)],
		CallbackSerializer,
		() => [/* @__PURE__ */ $.structField("done", /* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "both"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/grpcsync" }), /* @__PURE__ */ $.structField("callbacks", /* @__PURE__ */ $.pointerType("buffer.Unbounded"), [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/grpcsync" })]
	)
}

export async function NewCallbackSerializer(ctx: context.Context | null): globalThis.Promise<CallbackSerializer | $.VarRef<CallbackSerializer> | null> {
	let cs: CallbackSerializer | $.VarRef<CallbackSerializer> | null = (() => { const __goscriptLiteralField0 = buffer.NewUnbounded(); return new CallbackSerializer({done: $.makeChannel<{}>(0, {}, "both"), callbacks: __goscriptLiteralField0}) })()
	const __goscriptDeferArg1 = ctx
	queueMicrotask(async () => { await (cs !== null && (cs as any).__isVarRef !== true && (cs as any).__goValue === undefined ? ((cs as any) as CallbackSerializer).run(__goscriptDeferArg1) : CallbackSerializer.prototype.run.call(cs, __goscriptDeferArg1)) })
	return cs
}

var __goscriptAwait: any
