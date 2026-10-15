// Generated file based on pubsub.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as context from "@goscript/context/index.js"

import * as sync from "@goscript/sync/index.js"

import * as buffer from "@goscript/google.golang.org/grpc/internal/buffer/index.js"

import * as __goscript_callback_serializer from "./callback_serializer.gs.ts"
import "@goscript/context/index.js"
import "@goscript/sync/index.js"
import "@goscript/google.golang.org/grpc/internal/buffer/index.js"
import "./callback_serializer.gs.ts"

$.registerTypePackagePath("google.golang.org/grpc/internal/grpcsync", ["grpcsync.Subscriber", "grpcsync.PubSub"])

export type Subscriber = {
	OnMessage(msg: any): void
}

$.registerInterfaceType(
	"grpcsync.Subscriber",
	null,
	[$.methodSignature("OnMessage", [["msg", { kind: $.TypeKind.Interface, methods: [] }]])]
);

export class PubSub {
	public get cs(): __goscript_callback_serializer.CallbackSerializer | $.VarRef<__goscript_callback_serializer.CallbackSerializer> | null {
		return this._fields.cs
	}

	public set cs(value: __goscript_callback_serializer.CallbackSerializer | $.VarRef<__goscript_callback_serializer.CallbackSerializer> | null) {
		this._fields.cs = value
	}

	// Access to the below fields are guarded by this mutex.
	public get mu(): sync.Mutex {
		return this._fields.mu
	}

	public set mu(value: sync.Mutex) {
		this._fields.mu = value
	}

	public get msg(): any {
		return this._fields.msg
	}

	public set msg(value: any) {
		this._fields.msg = value
	}

	public get subscribers(): globalThis.Map<Subscriber | null, boolean> | null {
		return this._fields.subscribers
	}

	public set subscribers(value: globalThis.Map<Subscriber | null, boolean> | null) {
		this._fields.subscribers = value
	}

	public _fields: {
		cs: __goscript_callback_serializer.CallbackSerializer | $.VarRef<__goscript_callback_serializer.CallbackSerializer> | null
		mu: sync.Mutex
		msg: any
		subscribers: globalThis.Map<Subscriber | null, boolean> | null
	}

	constructor(init?: Partial<{cs?: __goscript_callback_serializer.CallbackSerializer | $.VarRef<__goscript_callback_serializer.CallbackSerializer> | null, mu?: sync.Mutex, msg?: any, subscribers?: globalThis.Map<Subscriber | null, boolean> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			cs: init?.cs ?? (null! as __goscript_callback_serializer.CallbackSerializer | $.VarRef<__goscript_callback_serializer.CallbackSerializer> | null),
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.Mutex()),
			msg: init?.msg ?? (null! as any),
			subscribers: init?.subscribers ?? (null! as globalThis.Map<Subscriber | null, boolean> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): PubSub {
		return new PubSub(this, true)
	}

	public __goscriptAssign(source: PubSub): void {
		const target = this._fields
		const values = source._fields
		target.cs = values.cs
		$.assignStruct(target.mu, values.mu)
		target.msg = $.assignFieldValue(target.msg, values.msg, { kind: $.TypeKind.Interface, methods: [] })
		target.subscribers = values.subscribers
	}

	public Done(): $.Channel<{}> | null {
		const ps: PubSub | $.VarRef<PubSub> | null = this;
		return __goscript_callback_serializer.CallbackSerializer.prototype.Done.call($.pointerValue<PubSub>(ps).cs)
	}

	public async Publish(msg: any): globalThis.Promise<void> {
		let ps: PubSub | $.VarRef<PubSub> | null = this;
		using __defer = new $.DisposableStack()
		const ps$: PubSub = ps == null ? $.pointerTarget<PubSub>(ps) : (ps as any).__isVarRef === true ? (ps as any).value : (ps as any).__goValue === undefined ? (ps as any) : $.pointerTarget<PubSub>(ps)
		await (ps$ as PubSub).mu.Lock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.Unlock())((ps$ as PubSub).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() });

		;(ps$ as PubSub).msg = msg
		for (const [sub, __rangeValue] of (ps$ as PubSub).subscribers?.entries() ?? []) {
			let s: Subscriber | null = sub
			await __goscript_callback_serializer.CallbackSerializer.prototype.TrySchedule.call((ps$ as PubSub).cs, $.functionValue(async (_p0: context.Context | null): globalThis.Promise<void> => {
				using __defer = new $.DisposableStack()
				await (ps$ as PubSub).mu.Lock()
				const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.Unlock())((ps$ as PubSub).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
				__defer.defer(() => { __goscriptDeferCallee1() })
				if (!$.mapGet<Subscriber | null, boolean, boolean>((ps$ as PubSub).subscribers, s, false)[0]) {
					return
				}
				void (__goscriptAwait = (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? (s as Exclude<Subscriber, null>) : $.pointerValue<Exclude<Subscriber, null>>(s)).OnMessage(msg), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo)))
		}
	}

	public async Subscribe(sub: Subscriber | null): globalThis.Promise<(() => void) | null> {
		let ps: PubSub | $.VarRef<PubSub> | null = this;
		let cancel: (() => void) | null = null! as (() => void) | null
		using __defer = new $.DisposableStack()
		const ps$: PubSub = ps == null ? $.pointerTarget<PubSub>(ps) : (ps as any).__isVarRef === true ? (ps as any).value : (ps as any).__goValue === undefined ? (ps as any) : $.pointerTarget<PubSub>(ps)
		await (ps$ as PubSub).mu.Lock()
		const __goscriptDeferCallee2 = $.functionValue(((__receiver) => () => __receiver.Unlock())((ps$ as PubSub).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
		__defer.defer(() => { __goscriptDeferCallee2() })

		$.mapSet((ps$ as PubSub).subscribers, sub, true)

		if ((ps$ as PubSub).msg != null) {
			let msg = (ps$ as PubSub).msg
			await __goscript_callback_serializer.CallbackSerializer.prototype.TrySchedule.call((ps$ as PubSub).cs, $.functionValue(async (_p0: context.Context | null): globalThis.Promise<void> => {
				using __defer = new $.DisposableStack()
				await (ps$ as PubSub).mu.Lock()
				const __goscriptDeferCallee3 = $.functionValue(((__receiver) => () => __receiver.Unlock())((ps$ as PubSub).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
				__defer.defer(() => { __goscriptDeferCallee3() })
				if (!$.mapGet<Subscriber | null, boolean, boolean>((ps$ as PubSub).subscribers, sub, false)[0]) {
					return
				}
				void (__goscriptAwait = (sub !== null && (sub as any).__isVarRef !== true && (sub as any).__goValue === undefined ? (sub as Exclude<Subscriber, null>) : $.pointerValue<Exclude<Subscriber, null>>(sub)).OnMessage(msg), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			}, ({ kind: $.TypeKind.Function, params: ["context.Context"], results: [] } as $.FunctionTypeInfo)))
		}

		const __goscriptReturn0: (() => void) | null = $.functionValue(async (): globalThis.Promise<void> => {
			using __defer = new $.DisposableStack()
			await (ps$ as PubSub).mu.Lock()
			const __goscriptDeferCallee4 = $.functionValue(((__receiver) => () => __receiver.Unlock())((ps$ as PubSub).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*Mutex).Unlock-fm")
			__defer.defer(() => { __goscriptDeferCallee4() })
			$.deleteMapEntry((ps$ as PubSub).subscribers, sub)
		}, ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo))
		cancel = __goscriptReturn0
		__defer.dispose()
		return cancel
		throw new globalThis.Error("goscript: unreachable return")
	}

	static __typeInfo = $.registerStructType(
		"grpcsync.PubSub",
		() => new PubSub(),
		() => [$.methodSignature("Done", [], [/* @__PURE__ */ $.channelType({ kind: $.TypeKind.Struct, methods: [], fields: [] }, "receive")], true), $.methodSignature("Publish", [["msg", { kind: $.TypeKind.Interface, methods: [] }]], [], true), $.methodSignature("Subscribe", [["sub", "grpcsync.Subscriber"]], [["cancel", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo)]], true)],
		PubSub,
		() => [/* @__PURE__ */ $.structField("cs", /* @__PURE__ */ $.pointerType("grpcsync.CallbackSerializer"), [0], 0, false, { pkgPath: "google.golang.org/grpc/internal/grpcsync" }), /* @__PURE__ */ $.structField("mu", "sync.Mutex", [1], 8, false, { pkgPath: "google.golang.org/grpc/internal/grpcsync" }), /* @__PURE__ */ $.structField("msg", { kind: $.TypeKind.Interface, methods: [] }, [2], 16, false, { pkgPath: "google.golang.org/grpc/internal/grpcsync" }), /* @__PURE__ */ $.structField("subscribers", /* @__PURE__ */ $.mapType("grpcsync.Subscriber", /* @__PURE__ */ $.basicType("bool")), [3], 32, false, { pkgPath: "google.golang.org/grpc/internal/grpcsync" })]
	)
}

export async function NewPubSub(ctx: context.Context | null): globalThis.Promise<PubSub | $.VarRef<PubSub> | null> {
	return (await (async () => { const __goscriptLiteralField0 = await __goscript_callback_serializer.NewCallbackSerializer(ctx); return new PubSub({cs: __goscriptLiteralField0, subscribers: $.makeMap<Subscriber | null, boolean>([])}) })())
}

var __goscriptAwait: any
