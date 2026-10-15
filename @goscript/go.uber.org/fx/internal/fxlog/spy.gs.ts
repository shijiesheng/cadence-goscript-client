// Generated file based on spy.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as reflect from "@goscript/reflect/index.js"

import * as sync from "@goscript/sync/index.js"

import * as fxevent from "@goscript/go.uber.org/fx/fxevent/index.js"
import "@goscript/reflect/index.js"
import "@goscript/sync/index.js"
import "@goscript/go.uber.org/fx/fxevent/index.js"

$.registerTypePackagePath("go.uber.org/fx/internal/fxlog", ["fxlog.Events", "fxlog.Spy"])

export type Events = $.Slice<fxevent.Event | null>

$.registerNamedType("fxlog.Events", /* @__PURE__ */ $.sliceType("fxevent.Event"));

$.registerNamedValueType(
	"fxlog.Events",
	{Len: (receiver: any, ...args: any[]) => (Events_Len as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args)), SelectByTypeName: (receiver: any, ...args: any[]) => (Events_SelectByTypeName as any)(($.isVarRef(receiver) ? receiver.value : receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("SelectByTypeName", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType("fxevent.Event", "fxlog.Events")])]
);

$.registerNamedValueType(
	"*fxlog.Events",
	{Len: (receiver: any, ...args: any[]) => (Events_Len as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args)), SelectByTypeName: (receiver: any, ...args: any[]) => (Events_SelectByTypeName as any)($.pointerValue(receiver), ...$.stripGenericTypeArgs(args))},
	[$.methodSignature("Len", [], [/* @__PURE__ */ $.basicType("int")]), $.methodSignature("SelectByTypeName", [["name", /* @__PURE__ */ $.basicType("string")]], [/* @__PURE__ */ $.sliceType("fxevent.Event", "fxlog.Events")])]
);

export class Spy {
	public get mu(): sync.RWMutex {
		return this._fields.mu
	}

	public set mu(value: sync.RWMutex) {
		this._fields.mu = value
	}

	public get events(): Events {
		return this._fields.events
	}

	public set events(value: Events) {
		this._fields.events = value
	}

	public _fields: {
		mu: sync.RWMutex
		events: Events
	}

	constructor(init?: Partial<{mu?: sync.RWMutex, events?: Events}>, __goscriptValue?: boolean) {
		this._fields = {
			mu: init?.mu ? $.markAsStructValue($.cloneStructValue(init.mu)) : $.markAsStructValue(new sync.RWMutex()),
			events: init?.events ?? (null! as Events)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): Spy {
		return new Spy(this, true)
	}

	public __goscriptAssign(source: Spy): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.mu, values.mu)
		target.events = values.events
	}

	public async EventTypes(): globalThis.Promise<$.Slice<string>> {
		const s: Spy | $.VarRef<Spy> | null = this;
		using __defer = new $.DisposableStack()
		const s$: Spy = s == null ? $.pointerTarget<Spy>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Spy>(s)
		await (s$ as Spy).mu.RLock()
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((s$ as Spy).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee0() })

		let types: $.Slice<string> = $.makeSlice<string>($.sliceLen(((s$ as Spy).events as Events)), undefined, "string")
		for (let __goscriptRangeTarget1 = (s$ as Spy).events, __goscriptRangeWindow1 = $.sliceRange(__goscriptRangeTarget1), __goscriptSliceWindow0 = $.sliceRange(types), i = 0; i < __goscriptRangeWindow1.length; i++) {
			let e = (__goscriptRangeWindow1.backing[__goscriptRangeWindow1.offset + i] as fxevent.Event | null);
			;(__goscriptSliceWindow0.backing as any[])[$.windowSlot(__goscriptSliceWindow0, i)] = (__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf((e as any))).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		}
		return types
	}

	public async Events(): globalThis.Promise<Events> {
		const s: Spy | $.VarRef<Spy> | null = this;
		using __defer = new $.DisposableStack()
		const s$: Spy = s == null ? $.pointerTarget<Spy>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Spy>(s)
		await (s$ as Spy).mu.RLock()
		const __goscriptDeferCallee1 = $.functionValue(((__receiver) => () => __receiver.RUnlock())((s$ as Spy).mu), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "sync.(*RWMutex).RUnlock-fm")
		__defer.defer(() => { __goscriptDeferCallee1() })

		let events: Events = ($.makeSlice<fxevent.Event | null>($.sliceLen(((s$ as Spy).events as Events))) as Events)
		$.copy((events as Events), ((s$ as Spy).events as Events))
		return (events as Events)
	}

	public async LogEvent(event: fxevent.Event | null): globalThis.Promise<void> {
		let s: Spy | $.VarRef<Spy> | null = this;
		const s$: Spy = s == null ? $.pointerTarget<Spy>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Spy>(s)
		await (s$ as Spy).mu.Lock();
		;(s$ as Spy).events = ($.appendOne(((s$ as Spy).events as Events), event, $.appendZeros.nil) as Events)
		void (s$ as Spy).mu.Unlock()
	}

	public async Reset(): globalThis.Promise<void> {
		let s: Spy | $.VarRef<Spy> | null = this;
		const s$: Spy = s == null ? $.pointerTarget<Spy>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<Spy>(s)
		await (s$ as Spy).mu.Lock();
		;(s$ as Spy).events = ($.goSlice((s$ as Spy).events, undefined, 0) as Events)
		void (s$ as Spy).mu.Unlock()
	}

	static __typeInfo = $.registerStructType(
		"fxlog.Spy",
		() => new Spy(),
		() => [$.methodSignature("EventTypes", [], [/* @__PURE__ */ $.sliceType(/* @__PURE__ */ $.basicType("string"))], true), $.methodSignature("Events", [], [/* @__PURE__ */ $.sliceType("fxevent.Event", "fxlog.Events")], true), $.methodSignature("LogEvent", [["event", "fxevent.Event"]], [], true), $.methodSignature("Reset", [], [], true)],
		Spy,
		() => [/* @__PURE__ */ $.structField("mu", "sync.RWMutex", [0], 0, false, { pkgPath: "go.uber.org/fx/internal/fxlog" }), /* @__PURE__ */ $.structField("events", /* @__PURE__ */ $.sliceType("fxevent.Event", "fxlog.Events"), [1], 24, false, { pkgPath: "go.uber.org/fx/internal/fxlog" })]
	)
}

export function Events_Len(es: Events): number {
	return $.sliceLen((es as Events))
}

export async function Events_SelectByTypeName(es: Events, name: string): globalThis.Promise<Events> {
	let out: Events = null! as Events
	for (let __goscriptRangeTarget0 = es, __goscriptRangeWindow0 = $.sliceRange(__goscriptRangeTarget0), __rangeIndex = 0; __rangeIndex < __goscriptRangeWindow0.length; __rangeIndex++) {
		let e = (__goscriptRangeWindow0.backing[__goscriptRangeWindow0.offset + __rangeIndex] as fxevent.Event | null)
		if ($.stringEqual((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>((__goscriptAwait = $.pointerValue<Exclude<reflect.Type, null>>(reflect.TypeOf((e as any))).Elem(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)).Name(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait), name)) {
			out = ($.appendOne((out as Events), e, $.appendZeros.nil) as Events)
		}
	}
	return (out as Events)
}

var __goscriptAwait: any
