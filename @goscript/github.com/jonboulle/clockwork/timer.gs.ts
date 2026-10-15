// Generated file based on timer.go
// Updated when compliance tests are re-run, DO NOT EDIT!

import * as $ from "@goscript/builtin/index.js"

import * as time from "@goscript/time/index.js"

import * as __goscript_clockwork from "./clockwork.gs.ts"
import "@goscript/time/index.js"
import "./clockwork.gs.ts"

$.registerTypePackagePath("github.com/jonboulle/clockwork", ["clockwork.Timer", "clockwork.realTimer", "clockwork.fakeTimer"])

export type Timer = {
	Chan(): $.Channel<time.Time> | null
	Reset(d: time.Duration): boolean | globalThis.Promise<boolean>
	Stop(): boolean | globalThis.Promise<boolean>
}

$.registerInterfaceType(
	"clockwork.Timer",
	null,
	[$.methodSignature("Chan", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])]
);

export class realTimer {
	public get Timer(): time.Timer | $.VarRef<time.Timer> | null {
		return this._fields.Timer
	}

	public set Timer(value: time.Timer | $.VarRef<time.Timer> | null) {
		this._fields.Timer = value
	}

	public _fields: {
		Timer: time.Timer | $.VarRef<time.Timer> | null
	}

	constructor(init?: Partial<{Timer?: time.Timer | $.VarRef<time.Timer> | null}>, __goscriptValue?: boolean) {
		this._fields = {
			Timer: init?.Timer ?? (null! as time.Timer | $.VarRef<time.Timer> | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): realTimer {
		return new realTimer(this, true)
	}

	public __goscriptAssign(source: realTimer): void {
		const target = this._fields
		const values = source._fields
		target.Timer = values.Timer
	}

	public Chan(): $.Channel<time.Time> | null {
		const r = this;
		return $.pointerValue<time.Timer>(r.Timer).C
	}

	public Reset(d: any): any {
		return $.pointerValue<time.Timer>(this.Timer).Reset(d)
	}

	public Stop(): any {
		return $.pointerValue<time.Timer>(this.Timer).Stop()
	}

	static __typeInfo = $.registerStructType(
		"clockwork.realTimer",
		() => new realTimer(),
		() => [$.methodSignature("Chan", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")]), $.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")]), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")])],
		realTimer,
		() => [/* @__PURE__ */ $.structField("Timer", /* @__PURE__ */ $.pointerType("time.Timer"), [0], 0, true, { anonymous: true })]
	)
}

export class fakeTimer {
	public get firer(): __goscript_clockwork.firer {
		return this._fields.firer
	}

	public set firer(value: __goscript_clockwork.firer) {
		this._fields.firer = value
	}

	// reset and stop provide the implmenetation of the respective exported
	// functions.
	public get reset(): ((d: time.Duration) => boolean | globalThis.Promise<boolean>) | null {
		return this._fields.reset
	}

	public set reset(value: ((d: time.Duration) => boolean | globalThis.Promise<boolean>) | null) {
		this._fields.reset = value
	}

	public get stop(): (() => boolean | globalThis.Promise<boolean>) | null {
		return this._fields.stop
	}

	public set stop(value: (() => boolean | globalThis.Promise<boolean>) | null) {
		this._fields.stop = value
	}

	// If present when the timer fires, the timer calls afterFunc in its own
	// goroutine rather than sending the time on Chan().
	public get afterFunc(): (() => void) | null {
		return this._fields.afterFunc
	}

	public set afterFunc(value: (() => void) | null) {
		this._fields.afterFunc = value
	}

	public _fields: {
		firer: __goscript_clockwork.firer
		reset: ((d: time.Duration) => boolean | globalThis.Promise<boolean>) | null
		stop: (() => boolean | globalThis.Promise<boolean>) | null
		afterFunc: (() => void) | null
	}

	constructor(init?: Partial<{firer?: __goscript_clockwork.firer, reset?: ((d: time.Duration) => boolean | globalThis.Promise<boolean>) | null, stop?: (() => boolean | globalThis.Promise<boolean>) | null, afterFunc?: (() => void) | null}>, __goscriptValue?: boolean) {
		this._fields = {
			firer: init?.firer ? init.firer.clone() : new __goscript_clockwork.firer(undefined, true),
			reset: init?.reset ?? (null! as ((d: time.Duration) => boolean | globalThis.Promise<boolean>) | null),
			stop: init?.stop ?? (null! as (() => boolean | globalThis.Promise<boolean>) | null),
			afterFunc: init?.afterFunc ?? (null! as (() => void) | null)
		}
		;(this as any)[$.structValueMarker] = __goscriptValue === true
	}

	public clone(): fakeTimer {
		return new fakeTimer(this, true)
	}

	public __goscriptAssign(source: fakeTimer): void {
		const target = this._fields
		const values = source._fields
		$.assignStruct(target.firer, values.firer)
		target.reset = values.reset
		target.stop = values.stop
		target.afterFunc = values.afterFunc
	}

	public async Reset(d: time.Duration): globalThis.Promise<boolean> {
		const f: fakeTimer | $.VarRef<fakeTimer> | null = this;
		return $.pointerValue<fakeTimer>(f).reset!(d)
	}

	public async Stop(): globalThis.Promise<boolean> {
		const f: fakeTimer | $.VarRef<fakeTimer> | null = this;
		return $.pointerValue<fakeTimer>(f).stop!()
	}

	public async expire(now: time.Time): globalThis.Promise<$.VarRef<time.Duration> | null> {
		const f: fakeTimer | $.VarRef<fakeTimer> | null = this;
		const f$: fakeTimer = f == null ? $.pointerTarget<fakeTimer>(f) : (f as any).__isVarRef === true ? (f as any).value : (f as any).__goValue === undefined ? (f as any) : $.pointerTarget<fakeTimer>(f)
		if ((f$ as fakeTimer).afterFunc != null) {
			const __goscriptDeferCallee0 = (f$ as fakeTimer).afterFunc
			queueMicrotask(async () => { (__goscriptAwait = __goscriptDeferCallee0!(), __goscriptAwait instanceof Promise ? await __goscriptAwait : __goscriptAwait) })
			return null
		}

		// Never block on expiration.
		const [__goscriptSelect0HasReturn, __goscriptSelect0Value] = await $.selectStatement<any, $.VarRef<time.Duration> | null>([
			{
				id: 0,
				isSend: true,
				channel: (f$ as fakeTimer).firer.c,
				value: now,
			},
			{
				id: -1,
				isSend: false,
				channel: null,
			}
		], true)
		if (__goscriptSelect0HasReturn) {
			return __goscriptSelect0Value
		}
		return null
	}

	public Chan(): any {
		return $.pointerValue<__goscript_clockwork.firer>(this.firer).Chan()
	}

	public expiry(): any {
		return $.pointerValue<__goscript_clockwork.firer>(this.firer).expiry()
	}

	public setExpiry(t: any): any {
		return $.pointerValue<__goscript_clockwork.firer>(this.firer).setExpiry(t)
	}

	static __typeInfo = $.registerStructType(
		"clockwork.fakeTimer",
		() => new fakeTimer(),
		() => [$.methodSignature("Reset", [["d", /* @__PURE__ */ $.basicType("int64", "time.Duration")]], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("Stop", [], [/* @__PURE__ */ $.basicType("bool")], true), $.methodSignature("expire", [["now", "time.Time"]], [/* @__PURE__ */ $.pointerType(/* @__PURE__ */ $.basicType("int64", "time.Duration"))], true), $.methodSignature("Chan", [], [/* @__PURE__ */ $.channelType("time.Time", "receive")], true), $.methodSignature("expiry", [], ["time.Time"], true), $.methodSignature("setExpiry", [["t", "time.Time"]], [], true)],
		fakeTimer,
		() => [/* @__PURE__ */ $.structField("firer", "clockwork.firer", [0], 0, false, { pkgPath: "github.com/jonboulle/clockwork", anonymous: true }), /* @__PURE__ */ $.structField("reset", ({ kind: $.TypeKind.Function, params: [/* @__PURE__ */ $.basicType("int64", "time.Duration")], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo), [1], 32, false, { pkgPath: "github.com/jonboulle/clockwork" }), /* @__PURE__ */ $.structField("stop", ({ kind: $.TypeKind.Function, params: [], results: [/* @__PURE__ */ $.basicType("bool")] } as $.FunctionTypeInfo), [2], 40, false, { pkgPath: "github.com/jonboulle/clockwork" }), /* @__PURE__ */ $.structField("afterFunc", ({ kind: $.TypeKind.Function, params: [], results: [] } as $.FunctionTypeInfo), [3], 48, false, { pkgPath: "github.com/jonboulle/clockwork" })]
	)
}

var __goscriptAwait: any
