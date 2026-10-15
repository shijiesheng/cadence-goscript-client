// Generated file based on listener.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as net from "@goscript/net/index.js"

import * as sync from "@goscript/sync/index.js"
import "@goscript/net/index.js"
import "@goscript/sync/index.js"

$.registerTypePackagePath("github.com/uber/tchannel-go/tnet", ["tnet.listener"])

export class listener {
	public get Listener(): net.Listener | null {
		return this._fields.Listener
	}

	public set Listener(value: net.Listener | null) {
		this._fields.Listener = value
	}

	// cond is used signal Close when there are no references to the listener.
	public get cond(): sync.Cond | $.VarRef<sync.Cond> | null {
		return this._fields.cond
	}

	public set cond(value: sync.Cond | $.VarRef<sync.Cond> | null) {
		this._fields.cond = value
	}

	public get refs(): number {
		return this._fields.refs
	}

	public set refs(value: number) {
		this._fields.refs = value
	}

	public _fields: {
		Listener: net.Listener | null
		cond: sync.Cond | $.VarRef<sync.Cond> | null
		refs: number
	}

	constructor(init?: Partial<{Listener?: net.Listener | null, cond?: sync.Cond | $.VarRef<sync.Cond> | null, refs?: number}>, __goscriptValue?: boolean) {
		this._fields = {
			Listener: init?.Listener ?? (null! as net.Listener | null),
			cond: init?.cond ?? (null! as sync.Cond | $.VarRef<sync.Cond> | null),
			refs: init?.refs ?? (0 as number)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): listener {
		return new listener(this, true)
	}

	public __goscriptAssign(source: listener): void {
		const target = this._fields
		const values = source._fields
		target.Listener = $.assignFieldValue(target.Listener, values.Listener, "net.Listener")
		target.cond = values.cond
		target.refs = values.refs
	}

	public async Accept(): globalThis.Promise<[net.Conn | null, $.GoError]> {
		const s: listener | $.VarRef<listener> | null = this;
		await using __defer = new $.AsyncDisposableStack()
		await (s !== null && (s as any).__isVarRef !== true && (s as any).__goValue === undefined ? ((s as any) as listener).incRef() : listener.prototype.incRef.call(s))
		const __goscriptDeferCallee0 = $.functionValue(((__receiver) => () => __receiver.decRef())($.pointerValue<listener>(s)), ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), "github.com/uber/tchannel-go/tnet.(*listener).decRef-fm")
		__defer.defer(async () => { await __goscriptDeferCallee0() })
		return await $.pointerValue<Exclude<net.Listener, null>>($.pointerValue<listener>(s).Listener).Accept()
	}

	public async Close(): globalThis.Promise<$.GoError> {
		const s: listener | $.VarRef<listener> | null = this;
		const s$: listener = s == null ? $.pointerTarget<listener>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<listener>(s)
		{
			let err = (__goscriptAwait = $.pointerValue<Exclude<net.Listener, null>>((s$ as listener).Listener).Close(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
			if (err != null) {
				return err
			}
		}

		await $.pointerValue<Exclude<sync.Locker, null>>($.pointerValue<sync.Cond>((s$ as listener).cond).L).Lock()
		while ((s$ as listener).refs > 0) {
			await sync.Cond.prototype.Wait.call($.pointerValue<sync.Cond>((s$ as listener).cond))
		}
		void (__goscriptAwait = $.pointerValue<Exclude<sync.Locker, null>>($.pointerValue<sync.Cond>((s$ as listener).cond).L).Unlock(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		return null
	}

	public async decRef(): globalThis.Promise<void> {
		let s: listener | $.VarRef<listener> | null = this;
		const s$: listener = s == null ? $.pointerTarget<listener>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<listener>(s)
		await $.pointerValue<Exclude<sync.Locker, null>>($.pointerValue<sync.Cond>((s$ as listener).cond).L).Lock();
		;(s$ as listener).refs--
		let newRefs = (s$ as listener).refs
		void (__goscriptAwait = $.pointerValue<Exclude<sync.Locker, null>>($.pointerValue<sync.Cond>((s$ as listener).cond).L).Unlock(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
		if (newRefs == 0) {
			sync.Cond.prototype.Broadcast.call($.pointerValue<sync.Cond>((s$ as listener).cond))
		}
	}

	public async incRef(): globalThis.Promise<void> {
		let s: listener | $.VarRef<listener> | null = this;
		const s$: listener = s == null ? $.pointerTarget<listener>(s) : (s as any).__isVarRef === true ? (s as any).value : (s as any).__goValue === undefined ? (s as any) : $.pointerTarget<listener>(s)
		await $.pointerValue<Exclude<sync.Locker, null>>($.pointerValue<sync.Cond>((s$ as listener).cond).L).Lock();
		;(s$ as listener).refs++
		void (__goscriptAwait = $.pointerValue<Exclude<sync.Locker, null>>($.pointerValue<sync.Cond>((s$ as listener).cond).L).Unlock(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait)
	}

	public Addr(): any {
		return $.pointerValue<Exclude<net.Listener | null, null>>(this.Listener).Addr()
	}

	static __typeInfo = $.registerStructType(
		"tnet.listener",
		() => new listener(),
		() => [$.methodSignature("Accept", [], ["net.Conn", "error"], true), $.methodSignature("Close", [], ["error"], true), $.methodSignature("decRef", [], [], true), $.methodSignature("incRef", [], [], true), $.methodSignature("Addr", [], ["net.Addr"])],
		listener,
		() => [/* @__PURE__ */ $.structField("Listener", "net.Listener", [0], 0, true, { anonymous: true }), /* @__PURE__ */ $.structField("cond", /* @__PURE__ */ $.pointerType("sync.Cond"), [1], 16, false, { pkgPath: "github.com/uber/tchannel-go/tnet" }), /* @__PURE__ */ $.structField("refs", /* @__PURE__ */ $.basicType("int"), [2], 24, false, { pkgPath: "github.com/uber/tchannel-go/tnet" })]
	)
}

export function Wrap(l: net.Listener | null): net.Listener | null {
	return $.interfaceValue<net.Listener | null>((() => { const __goscriptLiteralField0 = sync.NewCond($.pointerValueOrNil($.interfaceValue<sync.Locker | null>(new sync.Mutex(), "*sync.Mutex", /* @__PURE__ */ $.pointerType("sync.Mutex")))!); return new listener({Listener: l, cond: __goscriptLiteralField0}) })(), "*tnet.listener", /* @__PURE__ */ $.pointerType("tnet.listener"))
}

var __goscriptAwait: any
